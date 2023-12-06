const config = {
    endpoint: "http://127.0.0.1:1880/produtos",
    idDestino: "dgvDados"
}
const dgv = (configuracao)=>{
    fetch(configuracao.endpoint)
    .then(res => res.json())
    .then(res =>{
        res.forEach((el) => {
        const div = document.createElement("div")
        div.setAttribute("class", "dgvLinha")
        const ar = [el.n_id_produto, el.s_nome_produto, el.s_marca_produto, el.s_modelo_produto, ["../imgs/trash.png", "../imgs/editing.png", "../imgs/visível.png"]]
            for(let e in ar){
                if(e < 4){
                    var divlin = document.createElement("div")
                    divlin.setAttribute("class", `c${+e+1}`)
                    divlin.innerHTML = ar[e]
                    div.appendChild(divlin)
                }else{
                    for(let i = 0; i < 3; i++){
                        const img = document.createElement("img")
                        img.setAttribute("src", ar[e][i])
                        img.setAttribute("type", "image/png")
                        img.setAttribute("id", `img${i}`)
                        div.appendChild(img)
                    }
                }
            }
        const dd = document.querySelector(`.${configuracao.idDestino}`).appendChild(div)
        });
    }).catch(erro => {console.log(erro)})
}
dgv(config);
//Funções------------------------------------------------
fetch(config.endpoint)
    .then(res => res.json())
    .then(res =>{
        const array = []
        res.map((el)=>{
            array.push(el)
        })
        const img = [...document.getElementsByTagName("img")]
        const jview = document.querySelector(".janelaView")
        const view = document.querySelector(".view")
        const inp = [...document.getElementsByTagName("input")]
        img.map((elemento)=>{
            elemento.addEventListener("click", (el)=>{ 
            //Apagar
            if(el.target.id == "img0"){
                const id = +el.target.parentNode.firstChild.innerHTML
                const end_delete = `http://127.0.0.1:1880/removeproduto/${id}`
                fetch(end_delete)
                .then(res => res.json())
                .catch(erro => console.log(`Erro referente ao delete: ${erro}`))
                el.target.parentNode.remove()
            //Editar
            }else if(el.target.id == "img1"){
                const ndiv = document.createElement("button")
                ndiv.setAttribute("id", "btn_ocultar")
                ndiv.setAttribute("class", "btn")
                ndiv.setAttribute("type", "button")
                ndiv.innerHTML = "Ocultar"
                if(!view.querySelector("#btn_ocultar")){
                    view.appendChild(ndiv)
                }
                jview.style.display = "flex"
                var ar = []
                for(let i = 0; i < array.length; i++){
                    const id = +el.target.parentNode.firstChild.innerHTML
                    //console.log(id)
                    if(array[i].n_id_produto == id){
                        var ar = [array[i].n_id_produto, array[i].s_nome_produto, array[i].s_marca_produto, array[i].s_modelo_produto]
                    }
                    for(let ind in ar){
                        inp[ind].readOnly = false
                        inp[ind].value = ar[ind]
                    }
                }
                view.querySelector("#btn_ocultar").addEventListener("click", ()=>{
                    jview.style.display = "none"
                    for(let i = 0; i < 4; i++){
                        inp[i].readOnly = true
                    }
                })
                view.querySelector("#btn_ok").addEventListener("click", ()=>{
                    const end_editar = `http://127.0.0.1:1880/updateproduto/${ar[0]}/${inp[1].value}/${inp[2].value}/${inp[3].value}`
                    fetch(end_editar)
                    .then(res => res.json())
                    .catch(erro => console.log(`Erro relacionado ao editar: ${erro}`))
                    jview.style.display = "none"
                })
            //ver
            }else if(el.target.id == "img2"){
                jview.style.display = "flex"
                for(let i = 0; i < 4; i++){
                    const id = +el.target.parentNode.firstChild.innerHTML
                    if(array[i].n_id_produto == id){
                        ar = [array[i].n_id_produto, array[i].s_nome_produto, array[i].s_marca_produto, array[i].s_modelo_produto]
                    }
                }
                for(let ind in ar){
                    inp[ind].readOnly = false
                    inp[ind].value = ar[ind]
                }
                view.querySelector("#btn_ok").addEventListener("click", ()=>{
                        jview.style.display = "none"  
                })
            }
        }) 
    })
})