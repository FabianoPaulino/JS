const um = document.querySelector(".um")
const btn = document.querySelector(".b1")
const cur = [...document.querySelectorAll(".bt")]
const doi = document.querySelector(".dois")
let but = document.querySelector("#but")
//var nel = document.createElement("div")
const ncursos = ["HTML", "CSS","JavaScrip","PHP","Python","C++"]


///console.log(um.hasChildNodes())
//console.log(btn.hasChildNodes())


ncursos.map((el, i)=>{
    const nel = document.createElement("div")
    nel.innerHTML = el
    nel.setAttribute("class", "bt")
    nel.setAttribute("id", "b" + i)
    doi.appendChild(nel)
    const bt_era = document.createElement("img")
    bt_era.setAttribute("src", "./icons8-lixeira-24.png")
    nel.appendChild(bt_era)
    console.log(bt_era)
    bt_era.addEventListener("click", (evt)=>{
    doi.removeChild(evt.target.parentNode)
})
})

//Dessa vez pensei a mesma coisa que o prof

/*doi[0].appendChild(nel)
nel.setAttribute("id", "b7")
nel.setAttribute("class","bt")
nel.innerHTML = "Novo elemento"
console.log(doi)*/

/*
doi.push(el)
el.appendChild(cur[0])
console.log(doi)

cur[0].children.length > 0 ? console.log("Possui filhos") : console.log("Não possui filhos")

um.children[2].innerHTML = "Vish"
console.log(btn.parentNode.parentNode.parentNode)*/
