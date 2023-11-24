var times = document.querySelector(".time")
const ini = document.querySelector(".ini")
const sto = document.querySelector(".sto")
const zer = document.querySelector(".zer")
const par = document.querySelector(".par")
const exipar = document.querySelector("#Parciaisregistradas")
var tmpini = Date.now(), set = 0

const contador = ()=>{
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = Math.floor(cont/1000)
    times.innerHTML = converter(seg)
}
const converter = (seg)=>{
    const hora = Math.floor(seg/3600)
    let resto = seg%3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    
    const form = `${hora < 10 ? "0" + hora : hora}:${minuto < 10 ? "0" + minuto : minuto}:${segundo < 10 ? "0" + segundo : segundo}`
    return form
}
contador()
ini.addEventListener("click", ()=>{
    tmpini= Date.now()
    set = setInterval(contador, 1000);
})
sto.addEventListener("click", ()=>{
    clearInterval(set)
    
})
zer.addEventListener("click", ()=>{
    tmpini= Date.now()
    times.innerHTML = "00:00:00"
    exipar.innerHTML = ""
})
par.addEventListener("click", ()=>{
    exipar.innerHTML += `${times.innerHTML}</br>`
})