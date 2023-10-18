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
const c1=new car("Paggani", 2)
const c2 = new militar("Tanque", 1, 100, 1000)

console.log(c1.nome)
console.log(c1.portas)
c1.ligar()
c1.setcor("Azul")
console.log(c1.ligado)
console.log(c1.vel)
console.log(c1.cor)
console.log("---------------")

console.log(c2.nome)
console.log(c2.portas)
c2.ligar()
c2.setcor("Verde")
console.log(c2.ligado)
console.log(c2.vel)
console.log(c2.cor)
c2.atirar()
console.log(c2.munição)
console.log(c2.blindagem)
console.log("---------------")