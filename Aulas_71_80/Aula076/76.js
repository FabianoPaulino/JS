const i_numero = [...document.getElementsByClassName("numero")][0]
const promi = document.getElementById("promisse")

promi.addEventListener("click", ()=>{
    i_numero.innerHTML = "Processando..."
    promessa()
    
    
    .then((retur)=>{
        i_numero.innerHTML = retur
        i_numero.classList.remove("erro")
        i_numero.classList.add("ok")
    })
    .catch((retur)=>{
        i_numero.innerHTML = retur
        i_numero.classList.add("erro")
        i_numero.classList.remove("ok")
    })
    console.log(promessa())
})
    
let promessa = ()=>{
    let pro = new Promise((resolve, reject) => {
        let resultado = false
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo certo")
            }else{
                reject("Deu tudo errado")
            }
        }, tempo)
    })
    return pro
}
  

