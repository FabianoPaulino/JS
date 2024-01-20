const endPointConfig = "http://localhost:8080"/*/`../../../config.json`*/
fetch(endPointConfig)
.then(res => res.json())
.then(res => {
    sessionStorage.setItem("Servidor_node_red", res.Servidor_node_red);
    sessionStorage.setItem("Version", res.Version); 
})
.catch(erro => console.log(`erro(config): ${erro}`))



import {cxmsg} from "../utils/cxmsg.js";
const server = sessionStorage.getItem("Servidor_node_red")
const f_username = document.querySelector("#f_username")
const f_senha = document.querySelector("#f_senha")

const f_usernameFirst = document.querySelector("#f_usernameFirst")
const f_senhaFirst = document.querySelector("#f_senhaFirst")
const f_senhaFirstR = document.querySelector("#f_senhaFirstR")


const btn_login = document.querySelector("#btn_login")
const btn_loginF = document.querySelector("#btn_loginF")
const loginFirst = document.querySelector(".loginFirst")

sessionStorage.setItem("nome", "-1")

const btnFechar = document.querySelector("#btnFechar")

const fixared = (elemento, time)=>{
    elemento.classList.add("fixared")
    setTimeout(()=>{
        elemento.classList.remove("fixared")
    }, time)
}

const fetchUser = ()=>{
    const dados = {
        user: f_username.value,
        senha: f_senha.value
    }
    const cabecalho = {
        method: "POST",
        body: JSON.stringify(dados)
    }
    fetch(`${server}/todosUsuarios`, cabecalho)
    .then(res=>res.json())
    .then((res)=>{
        res.map((el)=>{
            if(el.retorno == 200){
                sessionStorage.setItem("nome", el.usuario)
                sessionStorage.setItem("id", el.id)
                fetch(`${server}/token/${el.id}`)
                .then(res=>res.json())
                .then((res)=>{
                    sessionStorage.setItem("tokenId", res.insertId)
                    sessionStorage.setItem("token", res.token)
                    location.href = "../backoffice/index.html"
                })
            }else if(el.retorno == 208){
                const config = {
                    tipo: 0,
                    titulo: "Senha",
                    texto: `Senha errada!`,
                    cor: "blue",
                    cmdOk:()=>{},
                    cmdSim:()=>{},
                    cmdNao:()=>{}
                }
                cxmsg.mostrar(config)
            }else if(el.retorno == 404){
                fixared(f_username, 500)
            }else if(el.retorno == 426){
                loginFirst.classList.remove("ocultarJanela")
                btnFechar.addEventListener('click', ()=>{
                    loginFirst.classList.add("ocultarJanela")
                })
                btn_loginF.addEventListener("click", ()=>{
                    const fetchNewSenha = ()=>{
                        resJ.then((res)=>{
                            res.map((el)=>{ 
                                let set1 = f_senhaFirst.value != f_senhaFirstR.value
                                let set2 = f_senhaFirst.value < 4
                                let set3 = f_senhaFirstR.value < 4
                                switch(true){
                                    case set1:
                                        fixared(f_senhaFirst, 500)
                                        fixared(f_senhaFirstR, 500)
                                    break;
                                    case set2:
                                        fixared(f_senhaFirst, 500)
                                    break;
                                    case set3:
                                        fixared(f_senhaFirst, 500)
                                    break;
                                    default:
                                        fetch(`${server}/novaSenha/${el.n_usuario_usuario}/${f_senhaFirst.value}`).then(res =>{
                                            if(res.status == 200){
                                                const config = {
                                                    tipo: 0,
                                                    titulo: "Senha",
                                                    texto: `Senha definida!`,
                                                    cor: "blue",
                                                    cmdOk:()=>{},
                                                    cmdSim:()=>{},
                                                    cmdNao:()=>{}
                                                }
                                                cxmsg.mostrar(config)
                                            }
                                        })
                                    break;
                                }
                                
                            })
                        })
                    }
                    fetchNewSenha()
                })
            }
        })
    })
    .catch((res)=>{
        console.log(res)
    })
}
//console.log(btn_login)
if(btn_login){
    btn_login.addEventListener('click', ()=>{
    f_usernameFirst.value = f_username.value
    fetchUser()
    })
}
