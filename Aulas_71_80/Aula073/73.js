const num = [...document.querySelectorAll(".num")]
const op = [...document.querySelectorAll(".op")]
const res = document.querySelector(".res")
const disp = document.getElementById("display")
const on = document.getElementById("onoff")
const clea = document.querySelector(".tclear")

let sinal = false
let decimal = false

//console.log(num)
//console.log(op)
console.log(clea)

num.map((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal = false
        if(disp.innerHTML == "0"){
            disp.innerHTML = ""
        }
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(evt.target.innerHTML == "0"){
                    disp.innerHTML += "0,"
                }else{
                    disp.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            disp.innerHTML += evt.target.innerHTML
        }
    })
})
op.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        if(sinal == false){
            sinal = true
            if(disp.innerHTML == "0"){
                disp.innerHTML = ""
            }
            else if(disp.innerHTML == "x"){
                disp.innerHTML += "*"
            }else{
                if(disp.innerHTML == "0"){
                    disp.innerHTML = ""
                }
            disp.innerHTML += evt.target.innerHTML
            console.log(evt.target.innerHTML)
            }
        }
    })
})
clea.addEventListener("click", (evt)=>{
    sinal = false
    disp.innerHTML = "0"
})
res.addEventListener("click", (evt)=>{
    let result = eval(disp.innerHTML)
    disp.innerHTML = result
})
on.addEventListener("click", (()=>{
    navigator.clipboard.writeText(disp.innerHTML)
    alert("Copiado")
}))