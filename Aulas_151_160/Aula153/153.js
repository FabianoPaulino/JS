const config = {
    endpoint: "produtos.json",
}
fetch(config.endpoint)
.then(res => res.json())
.then(res =>{
    console.log(res)
})
.catch(erro => {
    console.log(erro)
})