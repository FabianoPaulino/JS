class car{
    constructor(m, t){
        this.nome = m
        if (t == 0){
            this.tipo = "Esportivo"
            this.vel = 250
        }else if(t == 1){
            this.tipo = "Popular"
            this.vel = 200
        }else if(t == 2){
            this.tipo = "Suv"
            this.vel = 180
        }
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.vel}`)
        console.log(`___________________`)
    }
    getnome(){
        return this.nome
    }
    setnome(name){
        this.nome = name
    }
}

let c1 = new car("Corsa", 1)
let c2 = new car("Impala", 0)
let c3 = new car("Omega", 2)
//console.log(c1.tipo)
//console.log(c2.tipo)
c2.setnome("Corolla")
c2.info()