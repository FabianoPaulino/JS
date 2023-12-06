const config = {
    endpoint: "produtos.json",
    idDestino: "dgvDados"
}
const dgv = (configuracao)=>{
    fetch(configuracao.endpoint)
    .then(res => res.json())
    .then(res =>{
    res.forEach((el, i) => {
    const div = document.createElement("div")
    div.setAttribute("class", "dgvLinha")
    const ar = [el.id, el.produto, el.marca, el.modelo, ["../imgs/trash.png", "../imgs/editing.png", "../imgs/visível.png"]]
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
                        console.log("clicado")
                    })
                    div.appendChild(img)
                }
            }
            

        }
    const dd = document.querySelector(`.${configuracao.idDestino}`).appendChild(div)
    });
})
.catch(erro => {
    console.log(erro)
})
}
dgv(config);

