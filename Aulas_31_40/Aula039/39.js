const um = document.querySelector(".um")
const btn = document.querySelector(".b1")
const cur = [...document.querySelectorAll(".bt")]

console.log(um.hasChildNodes())
console.log(btn.hasChildNodes())

cur[0].children.length > 0 ? console.log("Possui filhos") : console.log("Não possui filhos")

um.children[2].innerHTML = "Vish"
console.log(btn.parentNode.parentNode.parentNode)