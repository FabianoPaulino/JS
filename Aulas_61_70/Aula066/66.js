class npc{
    constructor(power){
        this.power = power
        this.alerta = false
    }
    info = function(){
        console.log(`Energia: ${this.power}`)
        console.log(`Alerta: ${(npc.alerta?"Sim":"Não")}`)
        console.log("-----------------")
    }
    static alertar = function(){
        npc.alerta = true
    }
}

const n1 = new npc(100)
const n2 = new npc(60)
const n3 = new npc(70)
npc.alertar()
n1.info()
n2.info()
n3.info()
