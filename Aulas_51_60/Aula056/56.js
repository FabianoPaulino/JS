const box = document.getElementById("caixa")
const carros = ["Opala", "Cuda", "Mustang", "Charger RT"]
let ol = `<ol>`
carros.map((el)=>{
    ol+= `<li>${el}`
})
ol+=`</ol>`
const curso = "javascript", canal = "CFB Cursos"
//const frase = "Este é o curso de " + curso + " do canal " + canal 
const frase = `Este é o<br/>\n curso de ${curso} \n<br/>do canal ${canal}`

box.innerHTML = ol