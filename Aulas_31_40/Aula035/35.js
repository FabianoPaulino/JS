const c1 = document.querySelector(".um")
const c2 = document.querySelector(".dois")
const bot = document.querySelector("#but")
const todos = [...document.querySelectorAll(".bt")]

todos.map((el=>{
    el.addEventListener("click", (evt)=>{
        const curso=evt.target
        curso.classList.toggle("ver")
    })
}
))
//Professor usou os elemntos selecionados acima e  criou um array com eles
bot.addEventListener("click", ()=>{
    const cursosel = [...document.querySelectorAll(".ver")]
    const cursonsel = [...document.querySelectorAll(".bt:not(.ver)")]
    //Usou a propriedade :not para selecionar so os elemntos não selecionados, primeiro de bt somente os não selecionados
    //console.log(cursonsel)
    cursosel.map((el)=>{
        c2.appendChild(el)
    })
    cursonsel.map((el)=>{
        c1.appendChild(el)
    })
})


/*
adicione = (el, nel)=>{
    el.push(nel)
}
c1.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.target.classList.add("ver")
        const cop = el.cloneNode(true)
        c2.appendChild(cop)

    })
    el.addEventListener("dblclick", (evt)=>{
        evt.target.classList.remove("ver")
    })

})
bot.addEventListener("click", () => {
    c2.style.display = "block";
})
console.log(c2)
    */
