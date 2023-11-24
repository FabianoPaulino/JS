const times = document.querySelector("#time")


const tmpini= Date.now()

const contador = ()=>{
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = Math.floor(cont/1000)
    console.log(seg)
}

setInterval(contador, 1000 )
contador()
console.log(tmpini)
