const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

q1.accessKey = "b"
q2.accessKey = "n"

let domrect = q1.getBoundingClientRect()

q1.addEventListener("click", ()=>{
    q1.classList.toggle("set")
    info(q1)
})
q2.addEventListener("click", ()=>{
    q2.classList.toggle("set")
    info(q2)
})
let info = (el)=>{
    let domrect = el.getBoundingClientRect()
    posx.innerHTML = `posx: ${domrect.x}`
    posy.innerHTML = `posy: ${domrect.y}`
    largura.innerHTML = `largura: ${domrect.width}`
    altura.innerHTML = `altura: ${domrect.height}`
}

