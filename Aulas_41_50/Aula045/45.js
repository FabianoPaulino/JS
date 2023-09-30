const el = ["PHP", "React", "CSS", "HTML", "JavaScript", "C++", "Python"]
 const boxempt = document.querySelector("#boxcurse")
 const nel = document.createElement("div")
 const btns = document.getElementById("btnselectedcurse")
 const btnr = document.getElementById("btnremovecurse")
 const btna = document.getElementById("btnaddcurseafter")
 const btnb = document.getElementById("btnaddcursebefore")
 const msg = "Não existe curso selecionado, MARQUE UM CURSO"
 const txt = document.getElementById("inmcurse")

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
    //Comando
    const lb = create("div")
    lb.setAttribute("class", "icheck")
    //input
    const chk = create("input")
    chk.setAttribute("type", "radio")
    chk.setAttribute("name", "incheck")
    
    lb.appendChild(chk)

    nel.appendChild(lb)

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
    const radios = [...document.querySelectorAll("input[type=radio]")]
    const rfilter = radios.filter((el)=>{
        return el.checked
    })
    return rfilter[0]
}

//botões
 btns.addEventListener("click", ()=>{  
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)}else{
            alert("Curso selecionado é: " + getradioselected().parentNode.previousSibling.textContent)
    }   
 })
 btnr.addEventListener("click", ()=>{  
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)}else{getradioselected().parentNode.parentNode.remove()}  
 })

 btna.addEventListener("click", ()=>{
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)}else if(document.querySelectorAll("#el").length >= 10){
            alert("Excedeu a lista")                 
        }else if(txt.value!=""){
        const novocur = createle(txt.value)
        boxempt.insertBefore(novocur, getradioselected().parentNode.parentNode)    
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
        boxempt.insertBefore(novocur, getradioselected().parentNode.parentNode.nextSibling)    
        }else{
        alert("Digite algum nome")
    } 
 })
 /*btnb.addEventListener("click", ()=>{
    var clone = document.querySelectorAll("#boxcurse")[0].cloneNode(true) 
    boxempt.appendChild(clone.lastChild)
    boxempt.lastChild.firstChild.textContent = txt.value
    console.log(boxempt.lastChild.firstChild)
})
btna.addEventListener("click", ()=>{
    var clone = document.querySelector("#boxcurse").cloneNode(true) 
    boxempt.insertBefore(clone.lastChild, boxempt.firstChild)
    boxempt.firstChild.firstChild.textContent = txt.value
    console.log(boxempt.lastChild.firstChild)
})*/

 ///*/
//console.log(nele

 /*Próximos passos
 Ao clicar no botão adicionar, o elemento é adicionado na outra box se ele não existe.

 pegar o valor do input e colocar dentro do elemento div filho.

 Remover selecionado da outra caixa


 */