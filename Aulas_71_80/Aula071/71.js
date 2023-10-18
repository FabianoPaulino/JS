const num = [...document.querySelectorAll(".num")]
const op = [...document.querySelectorAll(".op")]
const res = document.querySelector(".res")
const disp = document.querySelector("#display")
const on = document.getElementById("onoff")
const clear = document.getElementById("tclear")

console.log(num)
console.log(op)
console.log(res)

num.map((el)=>{
    el.addEventListener("click", (evt)=>{
        disp.innerHTML += evt.target.innerHTML
    })
})
op.map((el)=>{
    el.addEventListener("click", (evt)=>{
        disp.innerHTML += evt.target.innerHTML
    })
})
op.map((el)=>{
    el.addEventListener("click", (evt)=>{
        disp.innerHTML = 0
    })
})

