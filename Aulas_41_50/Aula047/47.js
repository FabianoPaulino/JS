const p_array = document.querySelector("#array")
const intexto = document.querySelector("#itxt")
const but = document.querySelector("#bt")
const res = document.querySelector("#boxresult")

const el_array = [6,78,9,4,34,78,3,8,"html", "css", "javascript"]

p_array.innerHTML =  "[" + el_array + "]"

but.addEventListener("click", (evt)=>{
    res.innerHTML = "Valor não encontrado"
    const rel = el_array.find((e,i)=>{
        if(e.toUpperCase() == intexto.value.toUpperCase
        //toUpperCase é uma sacada porque em qualquer caso as letras serão sempre maiúsculas
        ()){
            res.innerHTML = "Tem o " + e + " na posição " + i
            return true
        }
    })
    //alert("tem" + rel)
})