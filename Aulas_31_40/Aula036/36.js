const um = document.querySelector(".um")
const btn = document.querySelector(".b1")
const cur = [...document.querySelectorAll(".bt")]

/*um.addEventListener("click", ()=>{
    console.log("clicou")
})
*/
um.addEventListener("click", (evt)=>{
    console.log("evt.target")
})
cur.map((el)=>{
    el.addEventListener("click", (evt)=>{
        //evt.stopPropagation()
    })
})