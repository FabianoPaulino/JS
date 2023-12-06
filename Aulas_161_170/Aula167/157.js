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
                        img.addEventListener("click", ()=>{
                            if(img.id == "img0"){
                                const end_delete = `http://127.0.0.1:1880/removeproduto/${ar[0]}`
                                console.log(ar[0])
                                fetch(end_delete)
                                .then(res => res.json())
                                .catch(erro => console.log(`Erro referente ao delete: ${erro}`))
                                div.remove()
                            }else if(img.id == "img1"){
                                console.log("1")
                            }else{
                                console.log("2")
                            }
                        })
                        div.appendChild(img) 
                    }
                }
            }
        const dd = document.querySelector(`.${configuracao.idDestino}`).appendChild(div)
        });
    })
    .catch(erro => {console.log(erro)})
}
dgv(config);

