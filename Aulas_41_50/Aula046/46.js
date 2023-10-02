const el = ["PHP", "React", "CSS", "HTML", "JavaScript", "C++", "Python"]
 const boxempt = document.querySelector("#boxcurse")
 const nel = document.createElement("div")
 const btns = document.getElementById("btnselectedcurse")
 const btnr = document.getElementById("btnremovecurse")
 const btna = document.getElementById("btnaddcurseafter")
 const btnb = document.getElementById("btnaddcursebefore")
 const msg = "Não existe curso selecionado, MARQUE UM CURSO"
 const txt = document.getElementById("inmcurse")

 const removeselected = ()=>{
    const selecionado = [...document.querySelectorAll(".selected")]
        selecionado.map((el)=>{
            el.classList.remove("selected")
        })
 }


function create(nome){
    return document.createElement(nome)
}
//
let index = 0
const createle = (cur)=>{
    const nel = create("div")
    nel.setAttribute("id", "el")
    nel.setAttribute("class", "c" + index)
    nel.innerHTML = cur

    nel.addEventListener("click", (evt)=>{
        removeselected()
        evt.target.classList.toggle("selected")
    })
    return nel
}
el.map((el)=>{  
    const ncur = createle(el)
    boxempt.appendChild(ncur)  
    index++
})
if(document.querySelectorAll("#el").length === 10){
    alert("A lista não pode exceder o tamanho dela!")
}
console.log(document.querySelectorAll("#el").length)

function getradioselected(){
    const sel = [...document.querySelectorAll(".selected")]
    return sel[0]
}

//botões
 btns.addEventListener("click", ()=>{  
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)}else{
            alert("Curso selecionado é: " + getradioselected().innerHTML)
    }   
 })
 btnr.addEventListener("click", ()=>{  
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)}else{getradioselected().remove()}  
 })

 btna.addEventListener("click", ()=>{
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)}else if(document.querySelectorAll("#el").length >= 10){
            alert("Excedeu a lista")                 
        }else if(txt.value!=""){
        const novocur = createle(txt.value)
        boxempt.insertBefore(novocur, getradioselected())    
        }else{
        alert("Digite algum nome")
    }  
 })
 btnb.addEventListener("click", ()=>{
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)}else if(document.querySelectorAll("#el").length >= 10){
            alert("Excedeu a lista")                 
        }else if(txt.value!=""){
        const novocur = createle(txt.value)
        boxempt.insertBefore(novocur, getradioselected().nextSibling)    
        }else{
        alert("Digite algum nome")
    } 
 })