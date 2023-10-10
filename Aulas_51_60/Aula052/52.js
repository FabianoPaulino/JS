let cors = ["azul","vermelho","verde","rosa","branco"]
let arra = ["html", "css", "javascript", cors]
const box = document.getElementById("caixa")
arra[0] = "C++"
console.log(arra)
arra.push("Python", "Node")
arra.pop()
arra.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    box.appendChild(p)
})