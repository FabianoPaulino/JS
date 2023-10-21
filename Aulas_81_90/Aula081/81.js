const eyes = [...document.querySelectorAll(".olho")]

let posx_m = 0
let posy_m = 0
window.addEventListener("mousemove", (evt)=>{
    posx_m = evt.clientX
    posy_m = evt.clientY

    const rot = Math.atan2(posy_m, posx_m)*180/Math.PI

    eyes.forEach((o)=>{
        o.style.transform = "rotate("+rot+"deg)"
    })
})