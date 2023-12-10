
var menuItens = document.querySelector(".menuItens")
var menuPrincipal = document.querySelector("#menuPrincipal")
var btnMenu = document.querySelector("#btnMenuPrincipal")
if(btnMenu != null){
    btnMenu.addEventListener("click", ()=>{
    menuPrincipal.classList.toggle("ocultar")})
}
var href = [...document.querySelectorAll(".btnMenuItens")]
href.map((trg)=>{
    trg.addEventListener("click", (el)=>{
        menuPrincipal.classList.toggle("ocultar")
    })
})
