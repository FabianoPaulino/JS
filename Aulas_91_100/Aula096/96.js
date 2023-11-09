import x from "./contatos.js"
const listacontatos = document.querySelector("#listacontatos")
const btn = document.querySelector("#btn_write")
const rem = document.querySelector("#btn_rel")


btn.addEventListener("click", (evt)=>{
    const cont = {
        nome: document.querySelector("#inm").value,
        telefone: document.querySelector("#itl").value,
        email: document.querySelector("#iem").value
    }
    x.addcontact(cont, listacontatos)
})