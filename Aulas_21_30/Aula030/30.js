const d1=document.getElementById("d1")
const d2=document.getElementById("d2")
console.log(d1.id)
console.log(d1.innerHTML)
console.log(d1)
 const ar=[d1,d2]
 console.log(ar)
 //for (el of ar){
    //el.innerHTML = "Div alterada"
 //}
 ar.map(a => a.innerHTML = "Div alterada")