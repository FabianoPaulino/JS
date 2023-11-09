class jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol()
    }
}
let players = [new jogador("j1"), new jogador("j2"), new jogador("j3"),new jogador("j4"), new jogador("j1"), new jogador("j1")]

//let s1 = players[0].id
let s1 = []

let s_players = players.filter((j)=>{
    return j.nome == "j1" 
})
s1 = s_players.map((jo)=>{
    return jo.id
})
console.log(s_players)
console.log(s1)