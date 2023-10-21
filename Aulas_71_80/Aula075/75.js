const i_numero = [...document.getElementsByClassName("numero")][0]

let resultado = false
let tempo = 3000
let pro = new Promise((resolve, reject) => {
    let resultado = true
    let tempo = 3000
    setTimeout(()=>{
        if(resultado){
            resolve("Deu tudo certo")
        }else{
            reject("Deu tudo errado")
        }
    }, tempo)
})



pro.then((retur)=>{
    i_numero.innerHTML = retur
    i_numero.classList.remove("erro")
    i_numero.classList.add("ok")
})
pro.catch((retur)=>{
    i_numero.innerHTML = retur
    i_numero.classList.add("erro")
    i_numero.classList.remove("ok")
})

i_numero.innerHTML = "..."