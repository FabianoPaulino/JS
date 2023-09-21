function re(...valores){
    let tam=valores.length
    for(let i=0; i<tam;i++){
        console.log(valores[i])
    }
}
function soma(...v){
    tam = v.length
    res = 0
    for(let o of v){
        res+=o
    }
    return res
}
console.log(soma(1,10,-6))
/*
console.log(re(10,5,0,7,"g",7,8,"h"))
function ge(i){
    let pp1 = document.getElementsByClassName("p2")//Retorna htmlcolection
    let pp2 = document.getElementsByName("p3")//retorna node list
    let pp3 = document.getElementById("p1")//retorna os dados
    let pp4 = document.getElementsByTagName("div")//retorna htmlcolection
    let pp5 = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "div")//retorna htmlcolection
    let pp6 = document.querySelector("button")//Retorna os dados
    let pp7 = document.querySelectorAll("p6")//retorna nodelist
    let pp8 = (i)//retorna dados
    console.log("Esse documento é do tipo: " + typeof(pp1))
    console.log("Esse documento é do tipo: " + typeof(pp2))
    console.log("Esse documento é do tipo: " + typeof(pp3))
    console.log("Esse documento é do tipo: " + typeof(pp4))
    console.log("Esse documento é do tipo: " + typeof(pp5))
    console.log("Esse documento é do tipo: " + typeof(pp6))
    console.log("Esse documento é do tipo: " + typeof(pp7))
    console.log("Esse documento é do tipo: " + typeof(pp8))
    console.log(pp1)
}
*/
