const hr = document.getElementById("dt")
const rel = document.getElementById("rel")
const dt = new Date()
const dia = dt.getDate() < 10 ? "0"+dt.getDate():dt.getDate()
const mes = dt.getMonth() < 10 ? "0"+dt.getMonth():dt.getMonth()
const dtr = dia + "/" + mes + "/" + dt.getFullYear()

console.log(`Dia do mês: ${dt.getDate()}`) 
console.log(`Data: ${toString(dtr)}`) 

const relogio = ()=>{
    const data = new Date()
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds()
    hora = hora < 10 ? "0" + hora : hora
    minuto = minuto < 10 ? "0" + minuto : minuto
    segundos = segundos < 10 ? "0" + segundos : segundos
    let hora_t = hora + ":" + minuto + ":" + segundos
    rel.innerHTML = hora_t
}

setInterval(relogio, 1000)

hr.innerHTML = dtr
