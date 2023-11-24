import{cx} from "../../cxmsg.js"

const config = {
  cor: "blue",
  tipo: "sn", //tipos: ok, sn
  texto: ["SIM", "NÃO"],
  comando_sn: null
}
const sim=()=>{
  console.log("O botão sim foi pressionado")
}

const btn = document.querySelector("#btn_show")
const btn2 = document.querySelector("#btn_show_2")
const btn3 = document.querySelector("#btn_show_3")
btn.addEventListener("click", (bt)=>{
  config.comando_sn = ()=>{sim()}
  config.tipo = "ok"
  cx.mostrar(config, "Cursos", "Curso de Javascript - Caixa de mensagem personalizada")
})
btn2.addEventListener("click", (bt)=>{
  
  config.cor = "red"
  config.tipo = "sn"
  cx.mostrar(config, "Cursos", "Curso de Javascript - Caixa de mensagem personalizada 2")
})
btn3.addEventListener("click", (bt)=>{
  config.cor = "green"
  config.tipo = "sn"
  config.texto = ["Ir", "Voltar"]
  cx.mostrar(config, "Cursos", "Curso de Javascript - Caixa de mensagem personalizada 3")
})
