const cursos=['HTML','CSS','JavaScript','PHP','React']
let c = cursos.map((el, i) => {
    return("Curso: " + el + " | Posição do Curso: " + i)
})
//console.log(c)
//let el=document.getElementsByTagName("div")
//el=[...el]
//console.log(el)
//el.map((e,i) => {
//    e.innerHTML = "Mudou"
//    console.log(e.innerHTML)
//})//

//let el=document.getElementsByTagName("div")
//const val=Array.prototype.map.call(el, ({innerHTML})=> //innerHTML)
//console.log(val)

const convertint = (e) => parseInt(e*2)
let num = ['1','2',"3",'4','5','6','7','8'].map(convertint)
console.log(num)
