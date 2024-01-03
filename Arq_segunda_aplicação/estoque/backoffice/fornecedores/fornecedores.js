import {cxmsg} from "../../utils/cxmsg.js";
//-------------  
const server = sessionStorage.getItem("Servidor_node_red")
var fetchDados = (externaldados)=>{
    const endPointColaboradores = `${server}/todosUsuarios`
    fetch(endPointColaboradores).then(res => res.json()).then(res => {
        var dadosGrid = document.querySelector(".dadosGrid")
        let arrayDados = externaldados
        if(!externaldados){
            arrayDados = res
        }
        arrayDados.map((elemento) => {
            var linhaGrid = document.createElement("div")
            linhaGrid.setAttribute("class", "linhaGrid")
            var dados = [elemento.n_usuario_usuario, elemento.s_nome_usuario, elemento.c_tipo_tipoUsuario, elemento.c_status_usuario, elemento.s_foto_usuario]
            dados.map((dd, index)=>{
                const colunaTituloGrid = document.createElement("div")
                colunaTituloGrid.setAttribute("class", `colunaTituloGrid c${index+1}`)
                const imgData = ["../../../imgs/editar.svg", "../../../imgs/delete.svg", ["../../../imgs/toggle_on.svg", "../../../imgs/toggle_off.svg"]]
                const imgId = ["Editar", "Apagar", "Atividade"]
                if(index == 4){
                    imgData.map((di, id)=>{
                        const botoesFuncoes = document.createElement("img")
                        if(id == 2){
                            if(dados[3] == "A"){
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
                                    const janela = new Janela(".Janela").editar(dados)
                                    break;
                                case "Apagar":
                                    const config = {
                                        tipo: 1,
                                        titulo: "Apagando",
                                        texto: "Tem certeza que deseja apagar o usuario?",
                                        cor: "red",
                                        cmdOk:()=>{},
                                        cmdSim:()=>{
                                            const endPointApagar = `${server}/apagar/${dados[0]}`
                                            fetch(endPointApagar)
                                            .then(res => {
                                                if(res.status == 200){
                                                    console.log("Usuário apagado!")
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
            dadosGrid.appendChild(linhaGrid)
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
    }).catch(erro => console.log(`Erro(Colaboradores): ${erro}`))
}

//Criar Janela
class Janela{
    constructor(pai){
        this.elemento = document.querySelector(pai)
        //Função para piscar red
        this.fixared = (elemento, time)=>{
            elemento.classList.add("fixared")
            setTimeout(()=>{
                elemento.classList.remove("fixared")
            }, time)
        }
        //====================
        //Função de retorno de elemento
        this.returnElement = (querry)=>{
            var elemento = []
            return elemento = [...document.querySelectorAll(querry)]
        }
        //------------------------------
        //Função de coloração
        this.fixared = (elemento, time)=>{
            elemento.classList.add("fixared")
                setTimeout(()=>{
                    elemento.classList.remove("fixared")
            }, time)
        }
        //-------------------------------
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
        //------------------------------
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
        //---------------------------------
        //Função tipos usuarios
        this.TiposUsuarios = (tipo)=>{
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
        //---------------------------------
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
        //----------------------------------
        //Função inserir telefones
        this.addTel = (inserir)=>{
            const f_tel = document.querySelector("#f_tel")
            const telefones = document.querySelector("#telefones")
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
            //divNumTel.innerHTML = f_tel.value
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
                var tipo = 10
                if(fTipo.value == "Admin"){
                    tipo = 5
                }else if(fTipo.value == "Colaborador"){
                    tipo = 1
                }
                const numTel = this.returnElement(".numTel")
                const arryTel = []
                for(let i of numTel){
                    arryTel.push(i.innerText)
                }
                if(fNome.value.length == 0){
                    this.fixared(fNome, 500)
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
                    body: JSON.stringify(_data),
                    }
                    fetch(`${server}/editarColab`, cabeçalho)
                    .then(res => {
                        if(res.status == 200){
                            //location.reload(true);
                            this.fechar()
                            const config = {
                                tipo: 0,
                                titulo: "Editando",
                                texto: "Os dados do colaborador foram alterados!",
                                cor: "blue",
                                cmdOk:()=>{},
                                cmdSim:()=>{},
                                cmdNao:()=>{}
                            }
                            cxmsg.mostrar(config)
                        }
                    }).catch(erro => console.log(`erro(editar contato): ${erro}`))
                }
            })
        }
        //-------------------------------
    }
    exibir = ()=>{
        var inner = `
        <div id="novoColaborador" class="popup">
                <div class="janelaPopup">
                    <div class="tituloPopup">
                        <div>
                            Novo colaborador
                        </div>
                        <img src="../../../imgs/close.svg" alt="close" class="btnJanelaOpera" id="btnFechar">
                    </div>
                    <div class="corpoPopup">
                        <div class="campoForm">
                            <label for="f_nome">Colaborador</label>
                            <input type="text" name="f_nome" id="f_nome">
                        </div>
                        <div class="campoForm">
                            <label for="f_tipo">Tipo de colaborador</label>
                            <select name="f_tipo" id="f_tipo">
                            </select>
                        </div>
                        <div class="campoForm">
                            <label for="f_status">Status do colaborador</label>
                            <select name="f_status" id="f_status">
                                <option value="A">Ativo</option>
                                <option value="I">Inativo</option>
                            </select>
                        </div>
                        <div class="campoForm">
                            <label for="f_foto">Foto</label>
                            <input type="file" name="f_foto" id="f_foto" accept="image/png, image/jpeg, image/jpg">
                            <div id="campoImagem">
                                <img src="" alt="Imagem" id="img_foto" class="img_foto" onerror="this.classList.add('sem-imagem')">
                            </div>
                        </div>
                        <div class="campoForm">
                            <label for="f_tel">Telefones</label>
                            <input type="number" name="f_tel" id="f_tel">
                            <div id="telefones">
                            </div>
                        </div>
                    </div>
                    <div class="rodapePopup">
                        <button id="btnGravar" class="btnComandoPopup">Gravar</button>
                        <button id="btnCancelar" class="btnComandoPopup">Cancelar</button>
                    </div>
                </div>
            </div>`
        this.elemento.innerHTML += inner
        this.fechar()
        this.TiposUsuarios(null)
        //Adicionar telefone
        document.addEventListener("keydown", (evt)=>{
            if(evt.key == "Enter"){
                this.addTel(null)
            }
        })
        //Botão gravar
        const btnGravar = document.querySelector("#btnGravar").addEventListener("click", (evt)=>{
            //Valores dos inputs
            var araryTel = []
            this.returnElement(".numTel").map((el)=>{
                return araryTel.push(el.innerHTML)
            })
            const ft = this.returnElement(".img_foto")[0]
            var Tipo = 0
            if(this.returnElement("select")[0].value == "Super usuário"){
                Tipo = 1
            }else if(this.returnElement("select")[0].value == "Admin"){
                Tipo = 5
            }else{
                Tipo = 10
            }
            const dados = {
                s_nome_usuario: this.returnElement("#f_nome")[0].value,
                c_tipo_tipoUsuario: Tipo,
                c_status_usuario: this.returnElement("select")[1].value,
                numTelefones: araryTel,
                s_foto_usuario: ft.getAttribute("src")
            }
            const cabecalho = {
                method: "post",
                body: JSON.stringify(dados)
            }
            const endPointNovoColab = `${server}/novoColab`
            const f_nome = this.returnElement("#f_nome")[0]
            const f_foto = this.returnElement("#f_foto")[0]
            const f_tel = this.returnElement("#f_tel")[0]
            var set1 = f_nome.value.length == 0
            var set2 = ft.getAttribute("src").length <= 1
            var set3 = araryTel.length == 0
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
                default:
                    fetch(endPointNovoColab, cabecalho)
                    .then(res => {
                    if(res.status == 200){
                        const config = {
                            tipo: 0,
                            titulo: "Novo Colaborador",
                            texto: "Novo colaborador adicionado!",
                            cor: "gray",
                            cmdOk:()=>{},
                            cmdSim:()=>{},
                            cmdNao:()=>{}
                        }
                        cxmsg.mostrar(config)
                        //console.log("Novo colaborador adicionado!")
                        //location.reload(true);
                    }
                    }).catch(erro => console.log(`erro(novoColab): ${erro}`))
                    break;
            }
            //-------------------------------------  
        })
        //=================================================================
    }
    remover = ()=>{
        this.elemento.innerHTML = ""
    }
    editar = (dados)=>{
        var inner_editar =`
        <div id="novoColaborador" class="popup">
                <div class="janelaPopup">
                    <div class="tituloPopup">
                        <div>
                            Editar colaborador
                        </div>
                        <img src="../../../imgs/close.svg" alt="close" class="btnJanelaOpera" id="btnFechar">
                    </div>
                    <div class="corpoPopup">
                        <div class="campoForm">
                            <label for="f_nome">Colaborador</label>
                            <input type="text" name="f_nome" id="f_nome" value="${dados[1]}">
                        </div>
                        <div class="campoForm">
                            <label for="f_tipo">Tipo de colaborador</label>
                            <select name="f_tipo" id="f_tipo" value>
                            </select>
                        </div>
                        <div class="campoForm">
                            <label for="f_foto">Foto</label>
                            <input type="file" name="f_foto" id="f_foto" accept="image/png, image/jpeg, image/jpg">
                            <div id="campoImagem">
                                <img src="" alt="Imagem" id="img_foto" class="img_foto" onerror="this.classList.add('sem-imagem')">
                            </div>
                        </div>
                         <div class="campoForm">
                            <label for="f_tel">Telefones</label>
                            <input type="number" name="f_tel" id="f_tel">
                            <div id="telefones">
                            </div>
                        </div>
                    </div>
                    <div class="rodapePopup">
                        <button id="btneditar" class="btnComandoPopup">Confirmar</button>
                        <button id="btnCancelar" class="btnComandoPopup">Cancelar</button>
                    </div>
                </div>
            </div>`
        this.TiposUsuarios(dados[2])
        this.elemento.innerHTML += inner_editar
        fetch(`${server}/telefone/${dados[0]}`)
        .then(res => res.json())
        .then(res =>{
            //Chama função
            this.atualizar(dados)
            this.fechar()
            //------------------
            res.map((el)=>{
                this.addTel(el.s_numero_telefone)
            })
            document.addEventListener("keydown", (evt)=>{
                if(evt.key == "Enter"){
                    this.addTel(null)
                }
            })
            const img = this.returnElement(".img_foto")[0]
            img.src= dados[4]
            img.classList.remove("sem-imagem")
        }).catch(erro => console.log(erro))
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
                fetch(`${server}/pesquisa/${campo.value}/${check}`)
                .then(res => res.json())
                .then(res => {
                    this.returnElement(".dadosGrid")[0].innerHTML = ""
                    fetchDados(res)
                })
                .catch(erro => console.log(`erro(pesquisa): ${erro}`))
                this.returnElement(".Janela")[0].innerHTML = ''
            }
        })
    }
} 
//Primeira chamada
fetchDados(null) 
//Botão adicionar
const add = document.querySelector("#btnAdd").addEventListener("click", ()=>{
    const janela = new Janela(".Janela").exibir()
})
//Botão pesquisar
const pesquisa = document.querySelector("#btnsrc").addEventListener("click", ()=>{
    const janela = new Janela(".Janela").pesquisa()
})
//Botão Listar
const listar = document.querySelector("#btnlist").addEventListener("click", ()=>{
    location.reload(true);
})