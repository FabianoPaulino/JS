const nome = Symbol("nome")
const numero = Symbol("num")
const uniforme = Symbol("cor")

const jogador={
    [nome]: "j1"
}

jogador[numero] = 10
jogador[uniforme] = "amarelo"

for(p in jogador){
    console.log(`${p}: ${jogador[p]}`)
}

console.log(jogador[numero]) 