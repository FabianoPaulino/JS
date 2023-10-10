//iteraveis
/*
Arrays
Strings
Map
Sets
*/

const valores = [1,2,3,4,5,6,7,8,9,0]
const str = 'iterador'
const ite = valores[Symbol.iterator]()

for(i in valores){
    console.log(ite.next().value)
}
console.log(ite)