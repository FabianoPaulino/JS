const inp = [...document.querySelectorAll(".inpt")]
const btr = document.querySelector("#bt")
const boxo = document.getElementById("boxop")
const box = document.getElementById("div2")
const box3 = document.getElementById("div3")
const opera = [
    (v)=>{
        return v[0]+v[1]
    },
    (v)=>{
        return v[0]-v[1]
    },
    (v)=>{
        return v[0]*v[1]
    },
    (v)=>{
        return v[0]/v[1]
    }

]
const valinp = ()=>{
    const resu = []
    inp.map((v)=>{
        resu.push(+v.value)
    })
    return resu
}
const ope = ["Soma","Subtração","Multiplicação","Divisão"]



const add = (i, txt)=>{
    const nel = document.createElement("div")
    nel.setAttribute("class", "botao")
    nel.setAttribute("id", "d"+ i)
    nel.innerHTML = txt
    return nel
}
let i = 0 
ope.map((el)=>{
    box.appendChild(add(i, el))
    i++
})
const bto = [...document.querySelectorAll(".botao")]
const removese = ()=>{
    const r = document.querySelector(".selected")
    if(r!=null){
    r.classList.remove("selected")
    }
}
let resf = 0
bto.map((el, i)=>{
     el.addEventListener("click", (ev)=>{
        removese()    
        el.classList.add("selected")
        if (i == 0){
            boxo.innerHTML = "+"
            resf = opera[0](valinp())
        }else if(i == 1){
            boxo.innerHTML = "-"
            resf = opera[1](valinp())
        }else if(i == 2){
            boxo.innerHTML = "*"
            resf = opera[2](valinp())
        }else{
            boxo.innerHTML = "/"
            resf = opera[3](valinp())
        }
    })
})
btr.addEventListener("click", ()=>{
    box3.innerHTML = resf
    removese() 
})

