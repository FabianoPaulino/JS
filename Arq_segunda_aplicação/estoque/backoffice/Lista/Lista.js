import {cxmsg} from "../../utils/cxmsg.js"; 
const server = sessionStorage.getItem("Servidor_node_red")
//Criar Janela
class Janela{
    constructor(pai, nome, editarJanela, exibirJanela, dados){
        this.data = dados
        this.nome = nome
        this.elemento = document.querySelector(pai)
        //Função para piscar red
        this.fixared = (elemento, time)=>{
            elemento.classList.add("fixared")
            setTimeout(()=>{
                elemento.classList.remove("fixared")
            }, time)
        }
        //------------------------------------
        //Função de retorno de elemento
        this.returnElement = (querry)=>{
            return [...document.querySelectorAll(querry)]
        }
        //------------------------------------
        //Função de conversão de imagem
        this.converte_imagem_b64 = (LocalDestino, arquivoImg)=>{
            const obj = arquivoImg;
            const reader = new FileReader();
            reader.addEventListener("load", (evt)=>{
                LocalDestino.src = reader.result;
            });
            if(obj){
                reader.readAsDataURL(obj)
            }
        }
        //------------------------------------
        //Função para remover dados
        this.removeDados = (elemento)=>{
            for(let i in elemento){
                this.returnElement(elemento[i]).map((el)=>{
                    if(el.type == "text" || el.type == "number" || el.type == "file"){
                        el.value = ""
                    }else if(el.src){
                        el.src = ""
                    }else{
                        el.remove()
                    }
                })
            }
        }
        //------------------------------------
        //Função tipos usuarios
        this.TiposUsuarios = (tipo)=>{
            if(this.data == 0){
                const end = `${server}/tiposUsuarios`
                fetch(end).then(res => res.json()).then(res => {
                    res.map((el)=>{
                        const opt = document.createElement("option")
                        opt.setAttribute("value", `${el.s_desc_tipoUsuario}`)
                        opt.innerHTML = el.s_desc_tipoUsuario
                        const f_tipo = document.querySelector("#f_tipo").appendChild(opt)
                        if(tipo){
                            if(tipo == el.n_nivel_tipoUsuario){
                                opt.setAttribute("selected", true)
                            }
                        }
                    })
                }).catch(erro => console.log(`Erro(Tipos de usuários): ${erro}`))
            } 
        }
        //------------------------------------
        //Botões fechar, cancelar e função foto
        this.fechar = ()=>{
            const btnCancelar = document.querySelector("#btnCancelar")
            const btnFechar = document.querySelector("#btnFechar")
            const f_foto = this.returnElement("#f_foto")[0]
            if(btnCancelar){
                btnCancelar.addEventListener("click", (evt)=>{
                const janela = new Janela(".Janela").remover()
                this.removeDados(["#f_nome", "#f_tel", ".tel", "#f_foto", ".img_foto", "#f_pesq"])
                //location.reload();
                })
            }
            if(btnFechar){
                btnFechar.addEventListener("click", (evt)=>{
                    const janela = new Janela(".Janela").remover()
                    this.removeDados(["#f_nome", "#f_tel", ".tel", "#f_foto", ".img_foto", "#f_pesq"])
                    location.reload();
                })
            }
             if(f_foto){
                f_foto.addEventListener("change", (evt)=>{
                    const imgFoto = this.returnElement(".img_foto")[0]
                    imgFoto.classList.remove('sem-imagem')
                    this.converte_imagem_b64(imgFoto, evt.target.files[0])
                })
            }
        }
        //------------------------------------
        //Função inserir telefones
        this.addTel = (inserir, pai)=>{
            const f_tel = document.querySelector("#f_tel")
            const telefones = document.querySelector(pai)
            const tel = [...document.querySelectorAll(".tel")]
            const divTel = document.createElement("div")
            divTel.setAttribute("class", "tel")
            const divNumTel = document.createElement("div")
            divNumTel.setAttribute("class", "numTel")
            const divDelTel = document.createElement("div")
            divDelTel.setAttribute("class", "delTel")
            divDelTel.innerHTML = "X"
            const numTel = [...document.querySelectorAll(".numTel")]
            var cntrl = true
            var cntrl_2 = true
            if(inserir){
                divTel.appendChild(divNumTel)
                divTel.appendChild(divDelTel)
                telefones.appendChild(divTel)
                divNumTel.innerHTML = inserir
            }else{
                divNumTel.innerHTML = f_tel.value
            }if(numTel != null){
                numTel.map((el)=>{
                    if(el.innerHTML == f_tel.value){
                        cntrl = false
                        this.fixared(el, 500)
                    }else if(numTel.length >= 6){
                        cntrl = false
                        this.fixared(telefones, 500)
                    }
                })
            }
            const fnumber = this.returnElement("#f_tel")[0]
                if(fnumber.value.length < 8 || fnumber.value.length > 11){
                    cntrl_2 = false
                    this.fixared(fnumber)
                }else{
                    cntrl_2 = true
                }  
            if(cntrl && cntrl_2){
                divTel.appendChild(divNumTel)
                divTel.appendChild(divDelTel)
                telefones.appendChild(divTel)
                f_tel.value = ""
            }
            divDelTel.addEventListener("click", (evt)=>{
                telefones.lastChild.remove(tel)
            })
        }
        //------------------------------------
        //Função atualizar usuario
        this.atualizar = (dados)=>{
            this.returnElement("#btneditar")[0].addEventListener("click", (evt)=>{
                const fNome = this.returnElement("#f_nome")[0]
                const fTipo = this.returnElement("#f_tipo")[0]
                var tipo = this.data
                if(this.data == 0){
                    if(fTipo.value == "Admin"){
                        tipo = 5
                    }else if(fTipo.value == "Colaborador"){
                        tipo = 1
                    }else if(fTipo.value == "Super usuário"){
                        tipo = 10
                    }
                }
                const numTel = this.returnElement(".numTel")
                const arryTel = []
                for(let i of numTel){
                    arryTel.push(i.innerText)
                }
                const contato = this.returnElement(".selecionado")
                if(fNome.value.length == 0){
                    this.fixared(fNome, 500)
                }else if(contato.length == 0 && this.data == 15){
                    this.fixared(this.returnElement("#gridContatos")[0], 500)
                }else{
                    const _data = {
                    id: dados[0],
                    nome: fNome.value,
                    tipo: tipo,
                    foto: this.returnElement("#img_foto")[0].src,
                    tel: arryTel
                    }
                    const cabeçalho = {
                    method: "POST",
                    body: JSON.stringify(_data)
                    }
                    fetch(`${server}/editarUser`, cabeçalho)
                    .then(res => {
                        if(res.status == 200){
                            //location.reload(true);
                            this.fechar()
                            const config = {
                                tipo: 0,
                                titulo: "Editando",
                                texto: `Os dados do ${this.nome} foram alterados!`,
                                cor: "blue",
                                cmdOk:()=>{},
                                cmdSim:()=>{},
                                cmdNao:()=>{}
                            }
                            cxmsg.mostrar(config)
                        }
                        let array = []
                        if(this.data == 15){
                            const ids = this.returnElement(".selecionado")
                            ids.map((el)=>{
                                array.push(el.querySelector(".cf1").innerText)
                            })
                            //fetch contatos
                            const _dataForn = {
                                id: dados[0],
                                cont: array
                                }
                                const cabeçalho = {
                                method: "POST",
                                body: JSON.stringify(_dataForn),
                                }
                            fetch(`${server}/atualizaTel`, cabeçalho)
                            .then(res => {
                            if(res.status == 200){
                                if(res.status == 200){
                                    console.log("Dados dos contatos do fornecedor alterados!")
                                }
                            }
                            }).catch(erro => console.log(`erro(Cont): ${erro}`))
                            //--------------
                        }
                    }).catch(erro => console.log(`erro(editar contato): ${erro}`))
                
                
            }})
        }
        //------------------------------------
        //Função editar
        this.editar = (dados)=>{
            this.TiposUsuarios(dados[2])
            this.elemento.innerHTML += editarJanela
            fetch(`${server}/telefone/${dados[0]}`)
            .then(res => res.json())
            .then(res =>{
                //Chama função
                this.atualizar(dados)
                this.fechar()
                //------------------
                res.map((el)=>{
                    this.addTel(el.s_numero_telefone, "#telefones")
                })
                document.addEventListener("keydown", (evt)=>{
                    if(evt.key == "Enter"){
                        this.addTel(null, "#telefones")
                    }
                })
                const img = this.returnElement(".img_foto")[0]
                if(this.data == 0){
                    img.src= dados[4]
                }else{
                    img.src= dados[3]
                }
                img.classList.remove("sem-imagem")
            }).catch(erro => console.log(erro))
            this.returnElement("#f_nome")[0].value = dados[1]
            this.listaForne(dados)
        }
        //------------------------------------
        //Função exibir
        this.exibir = ()=>{
            this.elemento.innerHTML += exibirJanela
            this.fechar()
            this.TiposUsuarios(null)
            //Adicionar telefone
            document.addEventListener("keydown", (evt)=>{
                if(evt.key == "Enter"){
                    this.addTel(null, "#telefones")
                }
            })
            //Botão gravar
            const btnGravar = document.querySelector("#btnGravar").addEventListener("click", (evt)=>{
                var araryTel = []
                this.returnElement(".numTel").map((el)=>{
                    return araryTel.push(el.innerHTML)
                })
                const ft = this.returnElement(".img_foto")[0]
                var Tipo = this.data
                if(this.data == 0){
                    if(this.returnElement("select")[0].value == "Super usuário"){
                        Tipo = 1
                    }else if(this.returnElement("select")[0].value == "Admin"){
                        Tipo = 5
                    }else if(this.returnElement("select")[0].value == "Fornecedor"){
                        Tipo = 15
                    }
                }
                let array = []
                if(this.data == 0){
                    var status = this.returnElement("#f_status")[0].value
                }else if(this.data == 15){
                    var status = this.returnElement(".c3")[0].innerText
                    const ids = this.returnElement(".selecionado")
                    ids.map((el)=>{
                        array.push(el.querySelector(".cf1").innerText)
                    })
                }else if(this.data != 15 || this.data != 0){
                    var status = this.returnElement(".c3")[0].innerText
                }
                const dados = {
                    s_nome_usuario: this.returnElement("#f_nome")[0].value,
                    c_tipo_tipoUsuario: Tipo,
                    c_status_usuario: status,
                    numTelefones: araryTel,
                    s_foto_usuario: ft.getAttribute("src"),
                    s_contato_contato: array,
                    user: this.returnElement("#f_user")[0].value == null ? 0 : this.returnElement("#f_user")[0].value,
                    senha: this.returnElement("#f_senha")[0].value == null ? 0 : this.returnElement("#f_senha")[0].value
                }
                const cabecalho = {
                    method: "post",
                    body: JSON.stringify(dados)
                }
                const endPointNovoUser = `${server}/novoUser`
                const f_nome = this.returnElement("#f_nome")[0]
                const f_foto = this.returnElement("#f_foto")[0]
                const f_tel = this.returnElement("#f_tel")[0]
                const contato = this.returnElement(".selecionado")
                var set1 = f_nome.value.length == 0
                var set2 = ft.getAttribute("src").length <= 1
                var set3 = araryTel.length == 0
                var set4 = contato.length == 0 && this.data == 15
                var set5 = false
                var set6 = false
                if(this.data == 1){
                    set5 = this.returnElement("#f_user")[0].value.length < 4
                    set6 = this.returnElement("#f_senha")[0].value.length < 4          
                }
                switch(true){
                    case set1:
                        this.fixared(f_nome, 500)
                    break;
                    case set2:
                        this.fixared(f_foto, 500)
                    break;
                    case set3:
                        this.fixared(f_tel, 500)
                    break;
                    case set4:
                        this.fixared(this.returnElement("#gridContatos")[0], 500)
                    break;
                    case set5:
                        this.fixared(this.returnElement("#f_user")[0], 500)
                    break;
                    case set6:
                        this.fixared(this.returnElement("#f_senha")[0], 500)
                    break;
                    default:
                        fetch(endPointNovoUser, cabecalho)
                        .then(res => {
                        if(res.status == 200){
                            if(res.status == 200){
                                //location.reload(true);
                                this.fechar()
                                const config = {
                                    tipo: 0,
                                    titulo: "Novo",
                                    texto: `Novo ${this.nome} adicionado!`,
                                    cor: "blue",
                                    cmdOk:()=>{},
                                    cmdSim:()=>{},
                                    cmdNao:()=>{}
                                }
                                cxmsg.mostrar(config)
                            }
                        }
                        }).catch(erro => console.log(`erro(novoColab): ${erro}`))
                        //this.addTelContato(null, null)
                        break;
                }
                
            })
        this.listaForne()
        }
        //Função lista contatos fornecedores
        this.listaForne = (cont)=>{
            const btnf = document.querySelector("#btnContatoForms")
            const contacts = (sim)=>{
                fetch(`${server}/pesquisa/${10}/${2}`)
                    .then(res => res.json())
                    .then(res => {
                        const gridContatos = document.querySelector("#gridContatos")
                        res.map((elemento)=>{
                            const linhaGridForn = document.createElement("div")
                            linhaGridForn.setAttribute("class", "linhaGrid")
                            var dados = [elemento.n_usuario_usuario, elemento.s_nome_usuario, elemento.c_status_usuario]
                            dados.map((dd, index)=>{
                                const colunaFornGrid = document.createElement("div")
                                colunaFornGrid.setAttribute("class", `colunaFornGrid cf${index+1}`)
                                linhaGridForn.addEventListener("click", (el)=>{
                                    linhaGridForn.classList.toggle("selecionado")
            
                                })
                                if(sim){
                                    fetch(`${server}/retornaContatos/${cont[0]}`)
                                    .then(res => res.json())
                                    .then(res=>{
                                        const linhagrid = [...document.querySelectorAll(".cf1")]
                                        res.map((res_el)=>{
                                             linhagrid.map((el)=>{
                                                if(res_el.s_numero_forn == el.innerText){
                                                    if(!el.querySelector(".selecionado")){
                                                        el.parentNode.classList.add("selecionado")
                                                    }
                                                }
                                            })
                                        })
                                    })
                                }
                                if(index == 2){
                                    const imgData = ["../../../imgs/verContatos.svg"]
                                    const imgId = ["Editar" ]
                                    imgData.map((di, id)=>{
                                        const botoesFuncoes = document.createElement("img")
                                        botoesFuncoes.setAttribute("alt", `funcoes`)
                                        botoesFuncoes.setAttribute("type", `image/svg`)
                                        botoesFuncoes.setAttribute("id", `${imgId[id]}`)
                                        botoesFuncoes.setAttribute("class", `btnFuncoes`)
                                        botoesFuncoes.setAttribute("src", `${di}`)
                                        colunaFornGrid.appendChild(botoesFuncoes)
                                        botoesFuncoes.addEventListener("click", (evt)=>{
                                            switch(evt.target.id){
                                                case "Editar":
                                                    fetch(`${server}/telefone/${dados[0]}`)
                                                    .then(res => res.json())
                                                    .then(res =>{
                                                        const caixaTel = document.createElement("div")
                                                        const caixaGeral = document.createElement("div")
                                                        caixaGeral.setAttribute("class", "caixaGeral")
                                                        caixaTel.setAttribute("class", "caixaTel")
                                                       
                                                        const btnClose = document.createElement("img")
                                                        btnClose.setAttribute("alt", `funcoes`)
                                                        btnClose.setAttribute("type", `image/svg`)
                                                        btnClose.setAttribute("src", `../../../imgs/close.svg`) 
                                                        
                                                        const caixaTitulo = document.createElement("div")
                                                        caixaTitulo.setAttribute("class", "caixaTitulo")
                                                        caixaTitulo.appendChild(btnClose)
                                                        
                                                        const popup = document.createElement("div")
                                                        popup.setAttribute("class", "caixaPop")
                                                        linhaGridForn.appendChild(popup)
                        
                                                        caixaGeral.appendChild(caixaTitulo)
                                                        caixaGeral.appendChild(caixaTel)
                                                        popup.appendChild(caixaGeral)
                                                        btnClose.addEventListener("click", ()=>{
                                                            popup.remove()                                                
                                                        })
                                                        if(res){
                                                            res.map((el)=>{
                                                                this.addTel(el.s_numero_telefone, ".caixaTel")
                                                            })
                                                        }
                                                        
                                                    }).catch(erro => console.log(erro))
                                                    break;
                                                case "Apagar":
                                                    this.addTelContato()
                                                    break;
                                            }
                                        })
                                    })
                                }else{
                                    colunaFornGrid.innerHTML = dd
                                }
                                if(elemento.c_status_usuario == "A"){
                                    linhaGridForn.appendChild(colunaFornGrid)
                                }
                            })
                            gridContatos.appendChild(linhaGridForn)
                        })
                    })
                    .catch(erro => console.log(`erro(Contatos): ${erro}`))
            }
            if(btnf){
                btnf.addEventListener("click", ()=>{
                    contacts()
                    btnf.remove() 
                })
            }
            if(cont){ 
                contacts(true)
            }
        }
        //------------------------------------
        //Função chama(adiciona lista)
        this.chama = (externaldados)=>{
        const endPointAll = `${server}/todosUsuarios`
        fetch(endPointAll).then(res => res.json()).then(res => {
            let arrayDados = externaldados
            if(!externaldados){
                arrayDados = res
            }
            var dadosGrid = document.querySelector(".dadosGrid")
            arrayDados.map((elemento) => {
                var linhaGrid = document.createElement("div")
                linhaGrid.setAttribute("class", "linhaGrid")
                if(this.data != 0){
                    var dados = [elemento.n_usuario_usuario, elemento.s_nome_usuario, elemento.c_status_usuario, elemento.s_foto_usuario]
                }else{
                    var dados = [elemento.n_usuario_usuario, elemento.s_nome_usuario, elemento.c_tipo_tipoUsuario, elemento.c_status_usuario, elemento.s_foto_usuario]
                }
                dados.map((dd, index)=>{
                    const colunaTituloGrid = document.createElement("div")
                    colunaTituloGrid.setAttribute("class", `colunaTituloGrid c${index+1}`)
                    const imgData = ["../../../imgs/editar.svg", "../../../imgs/delete.svg", ["../../../imgs/toggle_on.svg", "../../../imgs/toggle_off.svg"]]
                    const imgId = ["Editar", "Apagar", "Atividade"]
                    if(index == dados.length-1){
                        imgData.map((di, id)=>{
                            const botoesFuncoes = document.createElement("img")
                            if(id == 2){
                                if(elemento.c_status_usuario == "A"){
                                    botoesFuncoes.setAttribute("src", `${di[0]}`)
                                }else{
                                    botoesFuncoes.setAttribute("src", `${di[1]}`)
                                }
                            }else{
                                botoesFuncoes.setAttribute("src", `${di}`)
                            } 
                            botoesFuncoes.setAttribute("alt", `funcoes`)
                            botoesFuncoes.setAttribute("type", `image/svg`)
                            botoesFuncoes.setAttribute("id", `${imgId[id]}`)
                            botoesFuncoes.setAttribute("class", `btnFuncoes`)
                            colunaTituloGrid.appendChild(botoesFuncoes)
                            botoesFuncoes.addEventListener("click", (evt)=>{
                                switch(evt.target.id){
                                    case "Editar":
                                        this.editar(dados)
                                        break;
                                    case "Apagar":
                                        const config = {
                                            tipo: 1,
                                            titulo: "Apagando",
                                            texto: `Tem certeza que deseja apagar o ${this.nome}?`,
                                            cor: "red",
                                            cmdOk:()=>{},
                                            cmdSim:()=>{
                                                const endPointApagar = `${server}/apagar/${dados[0]}`
                                                fetch(endPointApagar)
                                                .then(res => {
                                                    if(res.status == 200){
                                                        console.log(`${this.nome} apagado!`)
                                                        location.reload(true);
                                                    }
                                                }).catch(erro => console.log(`erro(Apagar): ${erro}`))
                                            },
                                            cmdNao:()=>{
                                                return true
                                            }
                                        }
                                        cxmsg.mostrar(config)
                                        break;
                                    case "Atividade":
                                        var cond = "A"
                                        if(evt.target.getAttribute("src") == "../../../imgs/toggle_off.svg"){
                                            evt.target.setAttribute("src", "../../../imgs/toggle_on.svg")
                                        }else{
                                            evt.target.setAttribute("src", "../../../imgs/toggle_off.svg")
                                            cond = "I"
                                        }
                                        const endPointAtividade = `${server}/updateAtividade/${dados[0]}/${cond}`
                                        fetch(endPointAtividade)
                                        .then(res => {
                                            if(res.status == 200){
                                                console.log("Atividade alterada!")
                                                location.reload(true);
                                            }
                                        })
                                        .catch(erro => console.log(`erro(Atividade): ${erro}`))
                                        break;
                                }
                            })
                        })
                    }else if(index == 4){
                        null
                    }else{
                        colunaTituloGrid.innerHTML = dd
                    }
                    linhaGrid.appendChild(colunaTituloGrid)
                })
                if(elemento.c_tipo_tipoUsuario == this.data){
                    dadosGrid.appendChild(linhaGrid)
                }else if(this.data == 0){
                    dadosGrid.appendChild(linhaGrid)
                }
            });
            const inputPesq = document.querySelector(".inputFiltragem")
            inputPesq.addEventListener("input", ()=>{
            const coluna = [...document.querySelectorAll(".linhaGrid")]
                for(let i of coluna){
                    i.classList.add("ocultar_2")
                }
            coluna.map((elC)=>{
                [...elC.querySelectorAll(".colunaTituloGrid")].map((el, i)=>{
                    if(i != 4){
                        if(el.innerText.toUpperCase().indexOf(inputPesq.value.toUpperCase()) !== -1 && inputPesq.value.length != 0){
                        elC.classList.remove("ocultar_2")
                        el.classList.add("piscared")
                        }else if(inputPesq.value.length == 0){
                            elC.classList.remove("ocultar_2")
                            el.classList.remove("piscared")
                        }else{
                            el.classList.remove("piscared")
                        }
                    }
                })
            })
        })
        }).catch(erro => console.log(`Erro(Chamada): ${erro}`))
        .finally(()=>{
            const add = document.querySelector("#btnAdd").addEventListener("click", ()=>{
            this.exibir()
            })
        })
    }
    //Chamada de evento botão
    const pesquisa = document.querySelector("#btnsrc").addEventListener("click", ()=>{
        this.pesquisa(null)
    })
    //-----------------------------------------
    }
    pesquisa = ()=>{
        var inner_pesq =`
        <div id="Pesquisa" class="popup">
            <div class="janelaPopup">
                <div class="tituloPopup">
                    <div>
                        Pesquisar
                    </div>
                    <img src="../../../imgs/close.svg" alt="close" class="btnJanelaOpera" id="btnFechar">
                </div>
                <div class="corpoPopup">
                    <div class="campoForm">
                        <label for="f_nome">Tipo da pesquisa</label>
                        <div class="campoRadio">
                            <input type="radio" name="f_pesq" id="f_pesqid" checked>ID
                        </div>
                        <div class="campoRadio">
                            <input type="radio" name="f_pesq" id="f_pesqnome">Nome
                        </div>
                    </div>
                    <div class="campoForm">
                        <input type="text" name="f_pesq" id="f_pesq">
                    </div>
                </div>
                <div class="rodapePopup">
                    <button id="btnpesquisar" class="btnComandoPopup">Pesquisar</button>
                </div>
            </div>
        </div>`
        this.fechar()
        const fetchAdm = (v1, v2)=>{
            fetch(`${server}/pesquisa/${v1}/${v2}`)
                .then(res => res.json())
                .then(res => {
                    this.returnElement(".dadosGrid")[0].innerHTML = ""
                    this.chama(res)
                    if(res.length == 0){
                        const config = {
                        tipo: 0,
                        titulo: "Pesquisa",
                        texto: `Sem dados para essa pesquisa!`,
                        cor: "blue",
                        cmdOk:()=>{location.reload(true)},
                        cmdSim:()=>{},
                        cmdNao:()=>{return true}
                        }
                        cxmsg.mostrar(config)
                    }
                })
                .catch(erro => console.log(`erro(pesquisa): ${erro}`))
            }
            this.elemento.innerHTML += inner_pesq
            this.fechar()
            let radio = this.returnElement('input[name ="f_pesq"]')
            let campo = this.returnElement('#f_pesq')[0]
            radio.map((el)=>{
                el.addEventListener("click", ()=>{
                    campo.value = ""
                    campo.focus()
                })
            })
            this.returnElement("#btnpesquisar")[0].addEventListener("click", ()=>{
                var check = 0
                if(radio[0].checked){
                    check = 1
                }
                if(campo.value.length == 0){
                    this.fixared(campo, 500)
                }else{
                    fetchAdm(campo.value, check)
                    this.returnElement(".Janela")[0].innerHTML = ''
                }
            })
    }
    remover = ()=>{
        this.elemento.innerHTML = ""
    }
    chamada = ()=>{
        this.chama()
    }
} 
export {Janela}
