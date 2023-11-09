let Snome = new String("Nome")

let Snome_Copy = new String("Nome")

let Snome_2 = new String("Fabiano")

let Snome_3 = new String("Fabiano Paulino")
let nome = "string"
console.log(typeof(nome))
console.log(Snome.charAt(3))
console.log(Snome.charCodeAt(0))
console.log(Snome_2.concat(Snome))
console.log(Snome_2.indexOf("b"))
console.log(Snome_2.lastIndexOf("a"))

console.log(Snome.localeCompare(Snome_Copy))
console.log(Snome_2.replace("F", "f"))
console.log(Snome_2)
console.log(Snome.search("m"))
console.log(Snome_3.slice(8, 15))
console.log(Snome_3.split(" "))

console.log(Snome_3.substring(6, 15))
console.log(Snome_3.toUpperCase())
console.log(Snome_3.toLowerCase())
console.log(Snome_3.toLocaleLowerCase())
console.log(Snome_3.valueOf())

let num1 = 10
console.log(num1)
num2 = num1.toString()
num1 = +num1
console.log(typeof(num2))
num2 = +num2
console.log(typeof(num2))