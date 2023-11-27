import{login} from "../../login.js"
import{cx} from "../../cxmsg.js"
const para = {
    cor: "blue",
    img: "../../javascript100.png"
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