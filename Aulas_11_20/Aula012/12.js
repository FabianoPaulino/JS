let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1, ...n2]

console.log("n1: " + n1)
console.log("n3: " + n2)
console.log("n3: " + n3)
function som(v1, v2, v3){
    return v2+v1+v3
}
som(3,7,9)

let val=[6,8,40]

console.log(som(...val))

const obj=document.getElementsByTagName("p")
const obj2=[...document.getElementsByTagName("p")]

console.log(obj)
console.log(obj2)
