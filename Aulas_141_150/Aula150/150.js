var times = document.querySelector(".time")
const tmpini= Date.now()

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

setInterval(contador, 1000)
contador()
console.log(tmpini)
