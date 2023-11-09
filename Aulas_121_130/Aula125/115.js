let numeros = []
for(let i = 1; i<11; i++){
    numeros.push(10*i)
}
console.log(numeros)

let [e,f,g,...h]= numeros

let obj = {
    nome: "Fabiano",
    idade: "25"
}
let person = {nm, id} = obj

console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(person)

const cores = ()=>{
    return["verde", "amarelo", "azul", "branco"]
}
let [c1, c2, c3, c4] = cores()

console.log(c1)
console.log(c2)
console.log(c3)

let txt = "Curso de JavaScript"

let [a,b,c] = txt.split(" ")
console.log(a)
console.log(b)
console.log(c)