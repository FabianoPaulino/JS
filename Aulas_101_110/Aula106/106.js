let nome = new String("Fabiano Paulino 1998")
let nome_2 = new String("Faaaaaaabiano Paulinoooooooo 1998")
let email = new String(" namedunamed123@gmail.com ")
let nums = "1, 10, 100, 1000"

console.log(nome)
console.log(nome.search(/F/i))// i = Case sensistive, não faz distinção entre maúsculas minúsculas
console.log(nome.match(/o/g))// g = global
console.log(nome.replace(/a/ig, "A"))

console.log(nome.match(/[no]/g))// [] = Padrão
console.log(email.match(/[a-d]|[0-9]/ig))// | = e

console.log(email.match(/\d/ig))// \ = meta caracter, d = digit
console.log(email.match(/\s/ig))// \ = meta caracter, s = espaço
console.log(email.match(/\b/ig))// \ = meta caracter, b = DWORD

//Quantificadores
console.log(nome_2.match(/o+|a+/ig)) // + = Todos, simgular ou sequência
console.log(nome_2.match(/no*|Fa*/ig)) // * = O primeiro ou o primeiro com os demais
console.log(nums.match(/10*/ig))// * = O primeiro ou o primeiro com os demais, 1 ou 10 ou 100 ou 1000
console.log(nums.match(/10?/ig))// ? = Todos que contenham o primeiro elemnto(1) ou todo o elemento 10