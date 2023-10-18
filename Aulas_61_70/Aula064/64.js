const inp = [...document.querySelectorAll("input")]
const inp2 = [...document.querySelectorAll(".radi")]
const ad = document.getElementById("add")
const box = document.getElementById("mil")
const boxres = document.getElementById("resu")
const ger = [...document.getElementsByClassName("st")]

let a_carros = []
function removerarray(ele){
    a_carros = a_carros.filter((el)=>{
        return ele != el.nome
})
}

inp2.map((el, i)=>{   
    el.addEventListener("click", ()=>{
    if(i == 1){
        if(el.checked){
            for(let i=0; i<4; i++){
                if(i == 0)ger[0].value = ""
                inp[i].value = 0
            }
            ger[0].removeAttribute("disabled") 
            ger[1].removeAttribute("disabled") 
        }
    }else{
        if(el.checked){
            for(let i=0; i<4; i++){
                if(i == 0)ger[0].value = ""
                inp[i].value = 0
            }
            
            ger[0].setAttribute("disabled", "true")
            ger[1].setAttribute("disabled", "true")
            }
        }
    })
})

const setexibitioncar = ()=>{
    boxres.innerHTML = ""
    a_carros.forEach((c, i)=>{
        const div = document.createElement("div")
        const but = document.createElement("button")
        but.innerHTML = "Remover"
        but.setAttribute("id", "btre")
        div.setAttribute("class", "car")
        div.setAttribute("id", c.nome)

        but.addEventListener("click",(evt)=>{

            removerarray(c.nome)
            const re = document.getElementById(c.nome).remove()
            console.log(c.nome)
        })
        div.innerHTML += `Nome: ${c.nome}<br/>
        Portas: ${c.portas}<br/>
        Blindagem: ${c.blindagem}<br/>
        Munição: ${c.munição}<br/>
        `
        boxres.appendChild(div)
        div.appendChild(but)
    })
    
}
class car{
    constructor(nome, port){
       this.nome = nome
       this.portas = port
       this.ligado = false
       this.vel = 0
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setcor = function(cor){
        this.cor = cor
    }
}
class militar extends car{
    constructor(nome, port, blindagem, munição){
        super(nome, port)
        this.blindagem = blindagem
        this.munição = munição
    }
    atirar = function(){
        if(this.munição > 0){
            this.munição--
        }
    }
}
ad.addEventListener("click",()=>{
    if(inp2[0].checked){
        const c = new car(inp[0].value, inp[1].value)
        a_carros.push(c)
    }else{
        const c = new militar(inp[0].value, inp[1].value, inp[2].value, inp[3].value)
        a_carros.push(c)
    }
    setexibitioncar()
}) 

