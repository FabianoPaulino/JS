function* cores(){ //Asterisco representa função geradora
    yield "Vermelho"
    yield "Verde"
    yield "Azul" 
}
const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)

function* per(){
    const nom= yield 'Qual o seu nome?' 
    const esp= yield 'Qual seu esporte favorito?'
    return "Seu nome é: " + nom + ", seu esporte favorito é: " + esp 
}
const its=per()
console.log(its.next().value)
console.log(its.next("Fabiano").value)
console.log(its.next("Drift").value)

function* cont(){
    let i=0
    while(true){
        yield i++
    }
}
const it = cont()
let ii=0

while (true){
    if (ii > 89){
        break
    }
    it.next()
    ii++
}
console.log(it.next().value)
