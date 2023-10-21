const palco = document.querySelector(".palco")
const nobject = document.querySelector("#num_objetos")
const txtqt = document.querySelector("#txt_qtde")
const btnad = document.querySelector("#btn_add")
const btnre = document.querySelector("#btn_remover")


 let largurapalco = palco.offsetWidth
 let alturapalco = palco.offsetHeight
 let bolas = []
 let numbola = 0

 class Bola{
    constructor(arbolas, palco){
        this.tam = Math.floor(Math.random()*10)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*largurapalco-tam)
        this.py = Math.floor(Math.random()*alturapalco-tam)
        this.vx = Math.floor(Math.random()*2)+0.5
        this.vy = Math.floor(Math.random()*2)+0.5
        this.dx = Math.floor(Math.random()*10) > 5 ? 1 : -1
        this.dy = Math.floor(Math.random()*10) > 5 ? 1 : -1
        this.palco = palco
        this.arbolas = arbolas
        this.id = Date.now() + "" + Math.floor(Math.random()*Math.power(10, 10))
        this.desenhar()
        this.controle = setInterval(this.controlar(), 10)
        this.eu = document.getElementById(this.id)
        numbola ++
    }
    desenhar = ()=>{
         const div = document.createElement("div")
         div.setAttribute("id", this.id)
         div.setAttribute("class", "bola")
         div.setAttribute("style", `left:${this.px}; top:${this.py}; width: ${this.tam}; height: ${this.tam}; background-color: rgb(${this.r},${this.g},${this.g});`)
         this.palco.appendChild(div)
    }
    remover = ()=>{
        clearInterval(this.controle)
        bolas.filter((b)=>{
         if(b.id != this.id){
            return b
         }
        })
        this.eu.remove()
        numbola --
        nobject.innerHTML = numbola
    }
    controlar = ()=>{
        
    }
    minhapos = ()=>{
        return this.arbolas.indexOf(this)
    }
 }

 window.addEventListener("resize", ()=>{
    let largurapalco = palco.offsetWidth
    let alturapalco = palco.offsetHeight
 })
 btnad.addEventListener("click", ()=>{
    const qt = txtqt.value 
    for(let i = 0; i<qt; i++){//adicionar bolas

    }
})
 btnre.addEventListener("click", ()=>{
    bolas.map((b)=>{//remover bolas

    })
 })
