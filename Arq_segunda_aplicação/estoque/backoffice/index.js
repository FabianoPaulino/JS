
const menuItens = document.querySelector(".menuItens")
const menuPrincipal = document.querySelector("#menuPrincipal")
const btnMenu = document.querySelector("#btnMenuPrincipal")
const btnLogoff = document.querySelector("#btnLogoff")

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
const server = sessionStorage.getItem("Servidor_node_red")

const snome =  sessionStorage.getItem("nome")
const nome = document.querySelector("#nomeS")

if(snome == "-1"){
    location.href = "../backoffice/login.html"
}
nome.innerText +=` ${snome}`
btnLogoff.addEventListener("click", ()=>{
    location.href = "../backoffice/login.html"
})
let control = false
document.addEventListener('mousemove', function(event) {
    control = true
});
setInterval(()=>{
    fetch(`${server}/verificaToken/${sessionStorage.getItem("token")}`)
    .then(res => res.json())
    .then((res)=>{
        res.map((el)=>{
            if(el.retorno ==  200){
                location.href = "../backoffice/login.html"
            }else{
                if(control){
                    fetch(`${server}/atualizaToken/${el.n_token_token}`)
                    .then(res => {
                        if(res.status == 200){
                            console.log("ok")
                            control = false
                        }
                    })
                    .catch(res => console.log(res))
                }
            }
        })  
    }).catch(res => console.log(res))
}, 5000)