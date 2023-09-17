"use strict"
var nome1='Fabiano(Fora do escopo)'
//console.log(nome1)
function teste(){
    var nome = "Fabiano"
if(true){
    console.log('Dentro de teste: ' + nome)
}
console.log('Dentro da função e fora do if ' + nome)
}
teste()
console.log(nome1)
