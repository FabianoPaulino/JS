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
        this.px = Math.floor(Math.random()*(largurapalco-this.tam))
        this.py = Math.floor(Math.random()*(alturapalco-this.tam))
        this.vx = Math.floor(Math.random()*2)+0.5
        this.vy = Math.floor(Math.random()*2)+0.5
        this.dx = Math.floor(Math.random()*10) > 5 ? 1 : -1
        this.dy = Math.floor(Math.random()*10) > 5 ? 1 : -1
        this.palco = palco
        this.arbolas = arbolas
        this.id = Date.now() + "_" + Math.floor(Math.random()*10000000000)
        this.desenhar()
        this.eu = document.getElementById(this.id)
        numbola ++
        this.controle = setInterval(this.controlar, 10)
        nobject.innerHTML = numbola
    }
    desenhar = ()=>{
         const div = document.createElement("div")
         div.setAttribute("id", this.id)
         div.setAttribute("class", "bola")
         div.setAttribute("style", `left:${this.px}px; top:${this.py}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r},${this.g},${this.g});`)
         this.palco.appendChild(div)
    }
    remover = ()=>{
        clearInterval(this.controle)
        bolas = bolas.filter((b)=>{
         if(b.id != this.id){
            return b
         }
        })
        this.eu.remove()
        numbola --
        nobject.innerHTML = numbola
    }
    controlar = ()=>{
      this.controle_bordas()
      this.px += this.dx * this.vx
      this.py += this.dy * this.vy
      this.eu.setAttribute("style", `left:${this.px}px; top:${this.py}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r},${this.g},${this.g});`)
      if((this.px > largurapalco) || (this.py > alturapalco)){
         this.remover()
      }
    }
    minhapos = ()=>{
      return this.arbolas.indexOf(this)
    }
    controle_bordas = ()=>{
      if(this.px + this.tam >= largurapalco){
         this.dx = -1;
      }else if(this.px <= 0){
            this.dx = 1; 
         }
      if(this.py + this.tam >= alturapalco){
            this.dy = -1;
      }else if(this.py <= 0){
            this.dy = 1; 
        }
    }
 }
 window.addEventListener("resize", ()=>{
    let largurapalco = palco.offsetWidth
    let alturapalco = palco.offsetHeight
 })
 btnad.addEventListener("click", ()=>{
    const qt = txtqt.value 
    for(let i = 0; i<qt; i++){//adicionar bolas
      bolas.push(new Bola(bolas, palco))
    }
})
 btnre.addEventListener("click", ()=>{
    bolas.map((b)=>{//remover bolas
      b.remover()
    })
 })
