const carro = document.getElementById("carro")
const btn_e = document.getElementById("btn_esquerda")
const btn_d = document.getElementById("btn_direita")
const btn_p = document.getElementById("btn_stop")
const loop = document.getElementById("loop")
const tam = document.getElementById("tam")

const init = ()=>{
    carro.style.position = "relative"
    carro.style.left = "0"
    carro.style.width = `${tam.value}px`
}
window.onload = init()
let anima = null

const move = (dir)=>{
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
    anima = setTimeout(move, 20, dir)
    pare()
}

btn_e.addEventListener("click", ()=>{
    clear()
    move(-1)
})
btn_d.addEventListener("click", ()=>{
    clear()
    move(1)
})
btn_p.addEventListener("click", ()=>{
    clear()
})
const pare = ()=>{
    if(parseInt(carro.style.left) >= window.innerWidth-parseInt(carro.style.width)){
        if(loop.checked){
            clear()
            move(-1)
        }else{
            clear()
        }
    }else if(parseInt(carro.style.left) <= 0){
        if(loop.checked){
            clear()
            move(1)
        }else{
            clear()
        } 
    }
}
const clear = ()=>{
    clearInterval(anima)
}
tam.addEventListener("change", ()=>{
    if(tam.value < 100){
        alert("O tamanho não pode ser menor que 100")
        tam.value = 100
    }else{
        carro.style.width = `${tam.value}px`
    }
})

