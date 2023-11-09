const carro = document.getElementById("carro")
const btn_e = document.getElementById("btn_esquerda")
const btn_d = document.getElementById("btn_direita")

const init = ()=>{
    carro.style.position = "relative"
    carro.style.left = "0px"
}
window.onload = init()

btn_e.addEventListener("click", ()=>{
    let pos = parseInt(carro.style.left)
    carro.style.left = `${pos - 10}px`
})
btn_d.addEventListener("click", ()=>{
    let pos = parseInt(carro.style.left)
    carro.style.left = `${pos + 10}px`
})