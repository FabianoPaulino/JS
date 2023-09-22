const c1 = [...document.querySelectorAll(".c")]

const msg = () =>{
    alert("A mesma coisa")
}

c1.map((el)=>{
    el.addEventListener("click", (evt)=>{
        //const el=evt.target
        evt.target.classList.add("impo")
    })
})


