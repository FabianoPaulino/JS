const carro = document.getElementById("carro")
const btn_e = document.getElementById("btn_esquerda")
const btn_d = document.getElementById("btn_direita")
const btn_p = document.getElementById("btn_stop")

const init = ()=>{
    carro.style.position = "relative"
    carro.style.left = "0"
}
window.onload = init()

let anima = null

const move = (dir)=>{
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
    anima = setTimeout(move, 20, dir)
    console.log(parseInt(carro.style.left))
    pare()
}

btn_e.addEventListener("click", ()=>{
    clearInterval(anima)
    move(-1)
})
btn_d.addEventListener("click", ()=>{
    clearInterval(anima)
    move(1)
})
btn_p.addEventListener("click", ()=>{
    clearInterval(anima)
})
const pare = ()=>{
    if(parseInt(carro.style.left) >= window.innerWidth-100){
    clearInterval(anima)
    }else if(parseInt(carro.style.left) <= 0){
    clearInterval(anima)
    }
}

