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
    const ar = [el.id, el.produto, el.marca, el.modelo, el.funcao]
        for(let e in ar){
            var divlin = document.createElement("div")
            divlin.setAttribute("class", `c${+e+1}`)
            divlin.innerHTML = ar[e]
            div.appendChild(divlin)
        }
    const dd = document.querySelector(`.${configuracao.idDestino}`)
    dd.appendChild(div)
    });
})
.catch(erro => {
    console.log(erro)
})
}
dgv(config);

