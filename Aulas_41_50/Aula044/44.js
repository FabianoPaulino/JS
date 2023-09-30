const el = ["PHP", "React", "CSS", "HTML", "JavaScript", "C++", "Python"]
 const boxempt = document.querySelector("#boxcurse")
 const nel = document.createElement("div")
 const btns = document.getElementById("btnselectedcurse")
 const btnr = document.getElementById("btnremovecurse")
 const btna = document.getElementById("btnaddcurse")
 const msg = "Nao existe curso selecionado"

 el.map((el)=>{
    const nel = document.createElement("div")
    nel.setAttribute("id", "el")
    nel.innerHTML = el
    //Comando
    const lb = document.createElement("div")
    lb.setAttribute("class", "icheck")
    //input
    const chk = document.createElement("input")
    chk.setAttribute("type", "radio")
    chk.setAttribute("name", "incheck")
    
    lb.appendChild(chk)

    nel.appendChild(lb)

    boxempt.appendChild(nel)
})
function getradioselected(){
    const radios = [...document.querySelectorAll("input[type=radio]")]
    const rfilter = radios.filter((el)=>{
        return el.checked
    })
    return rfilter[0]
}
//console.log(getradioselected())

 btns.addEventListener("click", ()=>{  
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)}else{
            alert("Curso selecionado é: " + getradioselected().parentNode.previousSibling.textContent)
    }   
 })
 btnr.addEventListener("click", ()=>{  
    if (typeof(getradioselected()) == 'undefined'){
        alert(msg)
    } else {getradioselected().parentNode.parentNode.remove()}  
 })
 ///*/
//console.log(nele)

 /*Próximos passos
 Ao clicar no botão adicionar, o elemento é adicionado na outra box se ele não existe.

 pegar o valor do input e colocar dentro do elemento div filho.

 Remover selecionado da outra caixa


 */