import {contatos} from "./bancocontatos.js"
let contato = {
    getallcontacts(){
        return contatos
    },
    getcontact(i){
        return contatos[i]
    },
    addcontact(novo, destino){
        const div = document.createElement("div")
        div.setAttribute("class", "contato")
        let ar_cont = [novo.nome, novo.telefone, novo.email]
        contatos.push(ar_cont)
        let int = contatos.length - 1
        contatos[int].map((ar)=>{
            let p = document.createElement('p')
            p.innerHTML = ar
            div.appendChild(p) 
        })
        /*const p_nome = document.createElement("p")
        p_nome.innerHTML = 
        const p_tele = document.createElement("p")
        p_tele.innerHTML = novo.telefone
        const p_mail = document.createElement("p")
        p_mail.innerHTML = novo.email
        div.apendchild(p_nome)
        div.apendchild(p_tele)
        div.apendchild(p_mail)*/
        destino.appendChild(div)
    }
}
export default contato
