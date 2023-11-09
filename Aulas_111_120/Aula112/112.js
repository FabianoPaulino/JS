const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

let domrect = q1.getBoundingClientRect()

console.log(domrect)

q1.addEventListener("click", ()=>{
    if(q2.classList.contains("set")){
        q2.classList.remove("set")
    }
    q1.classList.toggle("set")
    info(q1)
})
q2.addEventListener("click", ()=>{
    if(q1.classList.contains("set")){
        q1.classList.remove("set")
    }
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
window.addEventListener("click", (evt)=>{
    mousePos = { x: evt.clientX, y: evt.clientY };
    if(q1.classList.contains("set")){
        q1.style.left = `${mousePos.x}px`
        q1.style.top = `${mousePos.y}px`
        info(q1)
    }  
    if(q2.classList.contains("set")){
        q2.style.left = `${mousePos.x}px`
        q2.style.top = `${mousePos.y-100}px`
        info(q2)
    }   
})
