import{cx} from "../../cxmsg.js"
import{login} from "../../login.js"
const para = {
    cor: "blue",
    img: "../../javascript100.png",
    endpoint: "http://localhost:8080/"
}
const configu = {
    cor: "blue",
    tipo: "ok"
}
const ok = ()=>{
    cx.mostrar(configu, "Login", "Login efetuado com sucesso")
}
const nok = ()=>{
    cx.mostrar({cor: "red", tipo: "ok"}, "Erro", "Usuario não cadastrado, username ou senha incorretos/ausentes")
}
login.login(ok, nok, para)


//login.show()