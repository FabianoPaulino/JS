const s1 = Symbol.for("FBI")
const s3 = Symbol.for("FBI")
const s2 = Symbol()

console.log(s1)
console.log(s2)
console.log(Symbol.keyFor(s1))