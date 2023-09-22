const d1=[...document.getElementsByTagName("div")]
//Como aprendido, o spread cria uma lista e espalha os itens
//console.log(d1.id)
//console.log(d1.innerHTML)
console.log(d1)
 //const ar=[d1,d2]
 ///console.log(ar)
 //for (el of d1){
    //el.innerHTML = "Div alterada"
 //}
d1.map(a => a.innerHTML = "Alter")