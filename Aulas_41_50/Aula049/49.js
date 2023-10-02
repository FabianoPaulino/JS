const p_array = document.querySelector("#array")
const intexto = document.querySelector("#itxt")
const but = document.querySelector("#btver")
const res = document.querySelector("#boxresult")

const el_array = [9,4,34,78,8,10,17,19,36]

p_array.innerHTML =  "[" + el_array + "]"

but.addEventListener("click", (evt)=>{
    const resu = el_array.some((e, i)=>{
        if(e>=76){
            res.innerHTML = "OK"
            return true} else {
                res.innerHTML = "Array não conforme na posição " + i
            }
    })
    console.log(resu)
})