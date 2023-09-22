"use strict"
let n=0, r, mult=1, s, f="O resultado é: "
let m= +prompt("Digite um número para saber o seu factorial: ")
let res = m
while(true){
    if (n >= 10){
        break
    }
    console.log(n)
    n++
}
console.log("Fim") 
while(true){
    if(m <= 1 ){
        r = f + res + " = " + mult
        console.log(r) 
        break
    }
    //console.log(m)
    mult *= m--
    //m--
    res+= " * " + m
    //console.log(res)
}
function w(w){
    console.log(w);
    w.innerHTML = r;
} 

