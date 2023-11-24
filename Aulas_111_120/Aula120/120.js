const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click", (evt)=>{
    let validit = f_nota.validity
    let msg = null
    if(validit.valueMissing){
        //f_nota.setCustomValidity("Este campo é obrigatório")
        msg = "Este campo é obrigatório"
        //msg = f_nota.validationMessage
    }else if(validit.rangeOverflow){
        //f_nota.setCustomValidity("A nota é muito alta")
        msg = "A nota é muito alta"
    }else if(validit.rangeUnderflow){
        //f_nota.setCustomValidity("A nota é muito baixa")
        msg = "A nota é muito baixa"
    }
    //f_nota.reportValidity()
    //f_msg.innerHTML = f_nota.validationMessage
    f_msg.innerHTML = msg
    evt.preventDefault()
})