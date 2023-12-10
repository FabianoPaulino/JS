// const body = document.body
// body.innerHTML += `<div id="novoColaborador" class="popup ocultarJanela">
// <div class="janelaPopup">
//     <div class="tituloPopup">
//         <div>
//             Novo colaborador
//         </div>
//         <img src="../../../imgs/close.svg" alt="close" class="btnJanelaOpera" id="btnFechar">
//     </div>
//     <div class="corpoPopup">
//         <div class="campoForm">
//             <label for="f_nome">Colaborador</label>
//             <input type="text" name="f_nome" id="f_nome">
//         </div>
//         <div class="campoForm">
//             <label for="f_tipo">Tipo de colaborador</label>
//             <select type="number" name="f_tipo" id="f_tipo">
//             </select>
//         </div>
//         <div class="campoForm">
//             <label for="f_status">Status do colaborador</label>
//             <select type="text" name="f_status" id="f_status">
//                 <option value="A">Ativo</option>
//                 <option value="I">Inativo</option>
//             </select>
            
//         </div>
//         <div class="campoForm">
//             <label for="f_tel">Telefones</label>
//             <input type="number" name="f_tel" id="f_tel">
//         </div>
//     </div>
//     <div class="rodapePopup">
//         <button id="btnGravar" class="btnComandoPopup">Gravar</button>
//         <button id="btnCancelar" class="btnComandoPopup">Cancelar</button>
//     </div>
// </div>
// </div>`
const endPointColaboradores = "http://127.0.0.1:1880/todosUsuarios"
fetch(endPointColaboradores).then(res => res.json()).then(res => {
    var dadosGrid = document.querySelector(".dadosGrid")
    res.map((elemento) => {
        var linhaGrid = document.createElement("div")
        linhaGrid.setAttribute("class", "linhaGrid")
        var dados = [elemento.n_usuario_usuario, elemento.s_nome_usuario, elemento.c_tipo_tipoUsuario, elemento.c_status_usuario, "operaçoes"]
        dados.map((dd, index)=>{
            const colunaTituloGrid = document.createElement("div")
            colunaTituloGrid.setAttribute("class", `colunaTituloGrid c${index+1}`)
            const imgData = ["../../../imgs/editar.svg", "../../../imgs/delete.svg"]
            const imgId = ["Editar", "Apagar"]
            if(index == 4){
                imgData.map((di, id)=>{
                    const botoesFuncoes = document.createElement("img")
                    botoesFuncoes.setAttribute("src", `${di}`)
                    botoesFuncoes.setAttribute("alt", `funcoes`)
                    botoesFuncoes.setAttribute("type", `image/svg`)
                    botoesFuncoes.setAttribute("id", `${imgId[id]}`)
                    botoesFuncoes.setAttribute("class", `btnFuncoes`)
                    colunaTituloGrid.appendChild(botoesFuncoes)
                    botoesFuncoes.addEventListener("click", (evt)=>{
                    })
                })
            }else{
                colunaTituloGrid.innerHTML = dd
            }
            linhaGrid.appendChild(colunaTituloGrid)
        })
        dadosGrid.appendChild(linhaGrid)
    });
    
}).catch(erro => console.log(`Erro(Colaboradores): ${erro}`))

const popup = document.querySelector(".popup")
const btnAdd = document.querySelector("#btnAdd").addEventListener("click", (evt)=>{
    popup.classList.remove("ocultarJanela")
})
const btnGravar = document.querySelector("#btnGravar").addEventListener("click", (evt)=>{
    popup.classList.add("ocultarJanela")
})
const btnCancelar = document.querySelector("#btnCancelar").addEventListener("click", (evt)=>{
    popup.classList.add("ocultarJanela")
})
const btnFechar = document.querySelector("#btnFechar").addEventListener("click", (evt)=>{
    popup.classList.add("ocultarJanela")
})

const endPointTiposUsuarios = "http://127.0.0.1:1880/tiposUsuarios"
fetch(endPointTiposUsuarios).then(res => res.json()).then(res => {
    res.map((el)=>{
        const opt = document.createElement("option")
        opt.setAttribute("value", `${el.s_desc_tipoUsuario}`)
        opt.innerHTML = el.s_desc_tipoUsuario
        const f_tipo = document.querySelector("#f_tipo").appendChild(opt)
    })
    
}).catch(erro => console.log(`Erro(Tipos de usuários): ${erro}`))

const f_tel = document.querySelector("#f_tel")
const telefones = document.querySelector("#telefones")
const tel = document.querySelector(".tel")
document.addEventListener("keydown", (evt)=>{
    if(evt.key == "Enter"){
        const divTel = document.createElement("div")
        divTel.setAttribute("class", "tel")
        const divNumTel = document.createElement("div")
        divNumTel.setAttribute("class", "numTel")
        divNumTel.innerHTML = f_tel.value
        const divDelTel = document.createElement("div")
        divDelTel.setAttribute("class", "delTel")
        divDelTel.innerHTML = "X"
        const numTel = [...document.querySelectorAll(".numTel")]
        var cntrl = true
        if(numTel != null){
            numTel.map((el)=>{
                if(el.innerHTML == f_tel.value){
                    cntrl = false
                    el.classList.add("piscared")
                    setTimeout(()=>{
                        el.classList.remove("piscared")
                    }, 2000)
                }else if(numTel.length >= 3){
                    cntrl = false
                    telefones.classList.add("piscared")
                    setTimeout(()=>{
                        telefones.classList.remove("piscared")
                    }, 2000)
                }
            })
        }
        if(cntrl){
            divTel.appendChild(divNumTel)
            divTel.appendChild(divDelTel)
            telefones.appendChild(divTel)
            f_tel.value = ""
        }
        divDelTel.addEventListener("click", (evt)=>{
            telefones.lastChild.remove(tel)
        })
    }
})


