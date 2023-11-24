const txt = document.querySelector("#txt")

const end = "texto.txt"

fetch(end).then(res => res.text()).then(res => {
    res = JSON.parse(res)
    txt.innerHTML = res.Nome
})

