class car{
    constructor(tipo, estágio){
        this.turbo = new turbo(estágio)
        if(tipo == 1){
            this.velmax = 120
            this.nome = "Normal"
        }else if(tipo == 2){
            this.velmax = 170
            this.nome = "Esportivo"
        }else if(tipo == 3){
            this.velmax = 200
            this.nome = "Super Esportivo"
        }
        this.velmax += this.turbo.cv
    }
    info(){
        console.log(this.nome)
        console.log(this.velmax)
        console.log(this.turbo)
    }
}
class turbo{
    constructor(c){
        if(c==0){
            this.cv = 0
        }else if(c==1){
            this.cv = 50
        }else if(c==2){
            this.cv = 75
        }else if(c==3){
            this.cv = 100
        }
    }
}

class carro_especial extends car{
    constructor(estágio){
        super(4, estágio)
        this.velmax = 300+ this.turbo.cv
        this.nome = "Carro especial"
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade máxima: ${this.velmax}`)
        console.log(`Turbo: ${this.turbo.cv} CV`)
    }
}
const c1 = new car(1, 0)
const c2 = new car(3, 1)
const c3 = new car(2, 2)
const c4 = new carro_especial(2)

c1.info()
c2.info()
c3.info()
c4.info()