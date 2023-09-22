let classname = [...document.getElementsByClassName("c")]
let cn1 = [...document.getElementsByClassName("c1")]
let cn2 = [...document.getElementsByClassName("c2")]
console.log(classname)
console.log(cn1)
console.log(cn2)

cn2[0].onclick = ()=>{
    cn2.map((el)=>{
        el.classList.add("impo")
    })
}
function muda(){
    cn2.map((el)=>{
        el.classList.add("impo")
    })
}




