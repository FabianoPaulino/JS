let pnt=+prompt("Qual o número?")
switch(pnt){
    case 1:
        console.log("Primeiro lugar, ouro")
        break
    case 2:
        console.log("Segundo lugar, prata")
        break
    case 3:
        console.log("Terceiro lugar, bronze")
        break
    case 4: case 5:
        console.log("Premio de participação")
        break
    default:
        console.log("Não subiu ao pódio")
        break
}