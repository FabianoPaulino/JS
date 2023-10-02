var p_array = document.querySelector("#array")
const intexto = document.querySelector("#itxt")
const but = document.querySelector("#btredu")
const res = document.querySelector("#boxresult")

const el_array = [9,4,34,78,8,10,17,19,36]
let ant = []
let atu = []
let dobro = []
p_array.innerHTML =  "[" + el_array + "]"

but.addEventListener("click", (evt)=>{   
       var resu = el_array.reduce((anter, atual, idex, array)=>{
        ant.push(anter)
        atu.push(atual)
        dobro. push(atual * 2)
            return anter + atual
        })
        res.innerHTML += "<br/> Anterior " + ant + "<br/>Atual " + atu + "<br/> A soma do atual com anterior é: " + resu + "<br/> O dobro do valor atual é: " + dobro
    })
    