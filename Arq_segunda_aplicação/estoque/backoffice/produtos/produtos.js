import {cxmsg} from "../../utils/cxmsg.js";

const server = sessionStorage.getItem("Servidor_node_red")

const btnAdd = document.querySelector("#btnAdd")
const btnSrc= document.querySelector("#btnsrc")
const btnList = document.querySelector("#btnlist")

const btnGravar = document.querySelector("#btnGravar")
const btnCancelar = document.querySelector("#btnCancelar")
const btnFechar = document.querySelector("#btnFechar")

 
const f_cod = document.querySelector("#f_cod")
const f_descProd = document.querySelector("#f_descProd")
const f_qtdeProd = document.querySelector("#f_qtdeProd")
const f_tipoProd = document.querySelector("#f_tipoProd")
const f_fornProd = document.querySelector("#f_fornProd")
const f_statusProd = document.querySelector("#f_statusProd")
const img_foto = document.querySelector("#img_foto")
const f_foto = document.querySelector("#f_foto")
const popup = document.querySelector(".popup")

const Mov = document.querySelector(".Mov")
const btnCancelarMov = document.querySelector("#btnCancelarMov")
const f_setQtdeMov = document.querySelector("#f_setQtdeMov")
const btnRemoverQtde = document.querySelector("#btnRemoverQtde")
const btnAddQtde = document.querySelector("#btnAddQtde")
const f_codMov = document.querySelector("#f_codMov")
const f_descMov = document.querySelector("#f_descMov")
const f_qtdeMov = document.querySelector("#f_qtdeMov")


var arrayForn = []

//Piscar vermelho
const fixared = (elemento, time)=>{
    elemento.classList.add("fixared")
    setTimeout(()=>{
        elemento.classList.remove("fixared")
    }, time)
}
//---------------------
//Converter imagem
const converte_imagem_b64 = (LocalDestino, arquivoImg)=>{
    const obj = arquivoImg;
    const reader = new FileReader();
    reader.addEventListener("load", (evt)=>{
        LocalDestino.src = reader.result;
    });
    if(obj){
        reader.readAsDataURL(obj)
    }
} 
//---------------------
//Para adicionar novos produtos ou editar
var cntr = false
const fetchNew = ()=>{
    const fornSelected = ()=>{
        for(let i of arrayForn){
            if(i[1] == f_fornProd.value){
                return i[0]
            }
        }
    }
    const dados = {
        codigo: f_cod.value,
        desc: f_descProd.value,
        qtde: f_qtdeProd.value,
        tipo: f_tipoProd.options[f_tipoProd.selectedIndex].value,
        forn: fornSelected(),
        status: f_statusProd.options[f_statusProd.selectedIndex].value,
        foto: img_foto.getAttribute("src")
    }
    
    const cabecalho = {
        method : 'POST',
        body: JSON.stringify(dados)
    }
    var edit = "Novo"
    var text = `Novo produto adicionado`
    var caminho = "novoProd"
    if(cntr){
        popup.firstChild.innerText = "Editar produto"
        edit = "Editando"
        text = "Produto editado"
        caminho = `editProd`
    }
    fetch(`${server}/${caminho}`, cabecalho)
    .then(res => {
        if(res.status == 200){
            const config = {
                tipo: 0,
                titulo: edit,
                texto: text,
                cor: "blue",
                cmdOk:()=>{location.reload(true)},
                cmdSim:()=>{},
                cmdNao:()=>{return true}
            }
            cxmsg.mostrar(config)
        }
    })
}
//---------------------------
//Adiciona Botôes
const btnFunctions = (elemento, dados)=>{
    const imgId = ["Editar", "Apagar", "Atividade", "Foto", "Inventorio"]
    const imgData = ["../../../imgs/editar.svg", "../../../imgs/delete.svg", ["../../../imgs/toggle_on.svg", "../../../imgs/toggle_off.svg"], "../../../imgs/image.svg", "../../../imgs/inventory.svg"]
    imgData.map((di, id)=>{
        const botoesFuncoes = document.createElement("img")
        if(id == 2){
            if(dados[5] == "A"){
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
        elemento.appendChild(botoesFuncoes)
        botoesFuncoes.addEventListener("click", (evt)=>{
            switch(imgId[id]){
                case "Editar":
                    popup.classList.remove("ocultar_2")
                    const tituloPopup = document.querySelector(".tituloPopup")
                    tituloPopup.firstElementChild.innerText = "Editar produto"
                    fetchTipo(dados)
                    fetchForn(dados)
                    f_cod.value = dados[0]
                    f_descProd.value = dados[1]
                    f_qtdeProd.value = dados[2]
                    f_statusProd.value = dados[5]
                    img_foto.src = dados[6]
                    img_foto.classList.remove("sem-imagem")
                    cntr = true
                break;
                case "Apagar":
                    const config = {
                        tipo: 1,
                        titulo: "Apagando",
                        texto: `Tem certeza que deseja apagar o produto?`,
                        cor: "red",
                        cmdOk:()=>{},
                        cmdSim:()=>{
                            const endPointApagar = `${server}/apagarProd/${dados[0]}`
                            fetch(endPointApagar)
                            .then(res => {
                                if(res.status == 200){
                                    console.log(`Produto apagado!`)
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
                    const endPointAtividade = `${server}/updateAtividadeProd/${dados[0]}/${cond}`
                    fetch(endPointAtividade)
                    .then(res => {
                        if(res.status == 200){
                            const config = {
                                tipo: 0,
                                titulo: "Atividade",
                                texto: `Atividade alterada`,
                                cor: "blue",
                                cmdOk:()=>{location.reload(true)},
                                cmdSim:()=>{},
                                cmdNao:()=>{return true}
                            }
                            cxmsg.mostrar(config)
                        }
                    })
                    .catch(erro => console.log(`erro(Atividade): ${erro}`))
                break;
                case "Foto":
                    const cximg = document.createElement("img")
                    cximg.setAttribute("alt", `CaixaImagem`)
                    cximg.setAttribute("type", `image/svg`)
                    cximg.setAttribute("id", `caixaImagem`)
                    cximg.setAttribute("class", `caixaImagem`)
                    cximg.setAttribute("src", `${dados[6]}`)
                    const el = elemento.querySelector("#caixaImagem")
                    if(el){
                        el.remove()
                    }else{
                        elemento.appendChild(cximg)
                        const st = setTimeout(()=>{cximg.remove()}, 1500)
                    }
                break;
                case "Inventorio":
                    if(dados[5] == "A"){
                        Mov.classList.remove("ocultarJanela")
                        f_codMov.value = dados[0]
                        f_descMov.value = dados[1]
                        f_qtdeMov.value = dados[2]
                        const fetchMov = (valor)=>{
                            fetch(`${server}/updateMov/${dados[0]}/${valor}`)
                            .then(res => {
                                if(res.status == 200){
                                    const config = {
                                        tipo: 0,
                                        titulo: "Movimetação",
                                        texto: "A quantidade foi alterada!",
                                        cor: "blue",
                                        cmdOk:()=>{location.reload(true)},
                                        cmdSim:()=>{},
                                        cmdNao:()=>{return true}
                                    }
                                    cxmsg.mostrar(config)
                                }
                            })
                        }
                        btnRemoverQtde.addEventListener("click", ()=>{
                            let qt = (+f_qtdeMov.value) - (+f_setQtdeMov.value)
                            if(qt < 0){
                                fixared(f_setQtdeMov, 500)
                            }else{
                                fetchMov(qt)
                            }
                        })
                        btnAddQtde.addEventListener("click", ()=>{
                            fetchMov((+f_qtdeMov.value) + (+f_setQtdeMov.value))
                        })
                        const eraseMov = ()=>{
                            f_setQtdeMov.value = 0
                        }
                        const btnFecharMov = document.querySelector("#btnFecharMov").addEventListener("click", ()=>{
                            Mov.classList.add("ocultarJanela")
                            eraseMov()
                        })
                        const btnCancelarMov = document.querySelector("#btnCancelarMov").addEventListener("click", ()=>{
                            Mov.classList.add("ocultarJanela")
                            eraseMov()
                        })
                    }
                break;
            }
        })
    })                
}
//-----------------------------
//Inserir na tela
const fetchExibir = (externo)=>{
    const exibir = (array)=>{
        const dadosGrid = document.querySelector(".dadosGridProduto")
        array.map((el)=>{
            const dados = [el.n_cod_produto, el.s_desc_produto, el.n_qtde_produto, el.n_tipoProduto_tipoProduto, el.n_fornecedor_forn , el.c_status_status, el.s_foto_produto]
            const linhaGrid = document.createElement("div")
            linhaGrid.setAttribute("class", "linhaGrid")
            dados.map((el, index)=>{
                const colunaTituloGrid = document.createElement("div")
                colunaTituloGrid.setAttribute("class", `colunaTituloGrid cp${index+1}`)
                if(index <= 5){
                    colunaTituloGrid.innerHTML = el
                }else{
                    btnFunctions(colunaTituloGrid, dados)
                }
                linhaGrid.appendChild(colunaTituloGrid)
            })
            dadosGrid.appendChild(linhaGrid)
        })
    }
    if(externo){
        exibir(externo)
    }else{
        fetch(`${server}/Produtos`)
        .then(res => res.json())
        .then(res =>{
            exibir(res)
        })
    }
}
fetchExibir()
//=============================
//Pesquisa
const pesquisa = ()=>{
    const pesq = document.querySelector(".pesq")
    pesq.classList.remove("ocultarJanela")
    const fetchAdm = (v1, v2)=>{
        fetch(`${server}/pesquisaProd/${v1}/${v2}`)
        .then(res => res.json())
        .then(res => {
            //const dadosGrid = document.querySelector(".dadosGrid").innerHTML = ""
            
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
            }else{
                const Janela = document.querySelector(".dadosGridProduto").innerHTML = ""
                fetchExibir(res)
                pesq.classList.add("ocultarJanela")
            }
        })
        .catch(erro => console.log(`erro(pesquisa): ${erro}`))
    }
    const btnpesquisar = document.querySelector("#btnpesquisar").addEventListener("click", ()=>{
        let radio = [...document.querySelectorAll('input[name ="f_pesq"]')]
        let campo = document.querySelector('#f_pesq')
        radio.map((el)=>{
            el.addEventListener("click", ()=>{
                campo.value = ""
                campo.focus()
            })
        })
        var check = 0
        if(radio[0].checked){
            check = 1
        }
        if(campo.value.length == 0){
            fixared(campo, 500)
        }else{
            fetchAdm(campo.value, check)
            
        }
    })
    const btnFecharPesq = document.querySelector("#btnFecharPesq")
    btnFecharPesq.addEventListener("click", ()=>{
        pesq.classList.add("ocultarJanela")
    })
}
//-----------------------------
//Limpar Campos
const erase = ()=>{
    f_cod.value = ""
    f_descProd.value = ""
    f_qtdeProd.value = ""
    f_tipoProd.innerHTML = ""
    f_fornProd.innerHTML = ""
    f_statusProd.value = ""
    img_foto.src = ""
    cntr = false
}
//-----------------------------

//Para inserir tipos
const fetchTipo = (dados)=>{
    fetch(`${server}/tiposProd`)
    .then(res => res.json())
    .then((res)=>{
        res.map((el, i)=>{
            const option = document.createElement("option")
            option.setAttribute("value", `${el.n_tipoProduto_tipoProduto}`)
            if(dados){
                if(dados[3] == el.n_tipoProduto_tipoProduto){
                option.setAttribute("selected", `true`)
                }
            }
            option.innerText = el.s_desc_produto
            f_tipoProd.appendChild(option)
        }) 
    })
}
//--------------------------
//Para inserir fornecedores
const fetchForn = (dados)=>{
    fetch(`${server}/Forn`)
    .then(res => res.json())
    .then((res)=>{
        res.map((el)=>{
            arrayForn.push([el.n_usuario_usuario, el.s_nome_usuario])
            const option = document.createElement("option")
            option.setAttribute("id", `${el.n_usuario_usuario}`)
            if(dados){
                if(dados[4] == el.n_usuario_usuario){
                option.setAttribute("selected", `true`)
                }
            }
            
            option.innerText = el.s_nome_usuario
            f_fornProd.appendChild(option)
        })
    })
}
//--------------------------
btnAdd.addEventListener("click", (evt)=>{
    popup.classList.remove("ocultar_2")
    fetchTipo(null)
    fetchForn(null)
})
btnGravar.addEventListener("click", (evt)=>{
    var cs2 = f_cod.value == 0
    var cs3 = f_descProd.value == 0
    var cs4 = f_qtdeProd.value == 0
    var cs5 = f_tipoProd.value == 0
    var cs6 = f_fornProd.value == 0
    var cs7 = f_statusProd.value == 0
    var cs8 = img_foto.getAttribute("src").length <= 1
    switch(true){
        case cs2:
            fixared(f_cod, 500)
        break;
        case cs3: 
            fixared(f_descProd, 500)
        break;
        case cs4: 
            fixared(f_qtdeProd, 500)
        break;
        case cs5: 
            fixared(f_tipoProd, 500)
        break;
        case cs6: 
            fixared(f_fornProd, 500)
        break;
        case cs7: 
            fixared(f_statusProd, 500)
        break;
        case cs8: 
            fixared(f_foto, 500)
        break;
        default:
            fetchNew()
        break;
    }
})
btnFechar.addEventListener('click', (evt)=>{
    popup.classList.add("ocultar_2")
    erase()
})
f_foto.addEventListener("change", (evt)=>{
    img_foto.classList.remove('sem-imagem')
    converte_imagem_b64(img_foto, evt.target.files[0])
})
btnSrc.addEventListener("click", ()=>{
    pesquisa()
})
btnCancelar.addEventListener("click", ()=>{
    const novoEstoque = document.querySelector('#novoEstoque')
    novoEstoque.classList.add("ocultar_2")
})
btnList.addEventListener("click", ()=>{
    location.reload(true)
})

const inputPesq = document.querySelector(".inputFiltragem")
inputPesq.addEventListener("input", ()=>{
    const coluna = [...document.querySelectorAll(".linhaGrid")]
        for(let i of coluna){
            i.classList.add("ocultar_2")
        }
    coluna.map((elC)=>{
        [...elC.querySelectorAll(".colunaTituloGrid")].map((el, i)=>{
            if(i != 6){
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