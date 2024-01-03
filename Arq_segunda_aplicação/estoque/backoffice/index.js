
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
const endPointConfig = "http://localhost:8080"/*/`../../../config.json`*/
fetch(endPointConfig)
.then(res => res.json())
.then(res => {
    sessionStorage.setItem("Servidor_node_red", res.Servidor_node_red);
    sessionStorage.setItem("Version", res.Version); 
})
.catch(erro => console.log(`erro(config): ${erro}`))
