const inp = [...document.querySelectorAll("input")]
const inp2 = [...document.querySelectorAll(".radi")]
const ad = document.getElementById("add")
const box = document.getElementById("mil")
const boxres = document.getElementById("resu")

const cob = ()=>{
    let nel = document.createElement("div")
    nel.setAttribute("Id", "cobre")
    box.appendChild(nel)
}
let index = 0
inp2.map((el, i)=>{   
    if(index == 0)cob()
    index++
    el.addEventListener("click", ()=>{
    if(i == 0){
        if(el.checked){
             cob()
        }
    }else{
        if(el.checked){
                box.lastChild.remove()
            }
        }
    })
})
class carnor{
    constructor(nome, port){
        this.nome = nome
        this.porta = port
    }
    setblind(blind){
        this.blindagem = blind  
    }
    setmuni(muni){
        this.municao = muni
    }
}
ad.addEventListener("click",()=>{
    const c1 = new carnor
    c1.nome = inp[0].value
    c1.porta = inp[1].value
    c1.setblind(inp[2].value)
    c1.setmuni(inp[2].value) 
    boxres.innerHTML += `Nome do veículo: ${c1.nome}<br/>Quantidade de portas: ${c1.porta}<br/>Blindagem: ${c1.blindagem}<br/>Munição: ${c1.municao}<br/>--------------<br/>` 
})