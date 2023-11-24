import{cx} from "../../cxmsg.js"

const config = {
  cor: "blue"
}
cx.configcor(config)
const btn = document.querySelector("#btn_show")
btn.addEventListener("click", (bt)=>{
  cx.mostrar("Cursos", "Curso de Javascript - Caixa de mensagem personalizada")
})
