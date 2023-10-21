const hr = document.getElementById("dt")
const dt = new Date()
const dia = dt.getDate() < 10 ? "0"+dt.getDate():dt.getDate()
const mes = dt.getMonth() < 10 ? "0"+dt.getMonth():dt.getMonth()
const dtr = dia + "/" + mes + "/" + dt.getFullYear()

console.log(`Dia do mês: ${dt.getDate()}`) 
console.log(`Data: ${toString(dtr)}`) 

hr.innerHTML = dtr
