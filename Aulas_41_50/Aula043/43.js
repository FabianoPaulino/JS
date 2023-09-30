const el = ["PHP", "React", "CSS", "HTML", "JavaScript", "C++", "Python"]
 const boxempt = document.querySelector("#boxcurse")
 const nel = document.createElement("div")
 const btn = document.getElementById("btnselectedcurse")

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

 btn.addEventListener("click", ()=>{
    const getradios = [...document.querySelectorAll("input[type=radio]")]
    var grfilter = getradios.filter((el, i)=>{
        return el.checked
    })
    grfilter = grfilter[0]
    //console.log(grfilter)

    const txtselected = grfilter.parentNode.previousSibling.textContent
    alert("Curso selecionado é: " + txtselected)
 })
 ///console.log(nele)

 /*Próximos passos
 Ao clicar no botão adicionar, o elemento é adicionado na outra box se ele não existe.

 pegar o valor do input e colocar dentro do elemento div filho.

 Remover selecionado da outra caixa


 */