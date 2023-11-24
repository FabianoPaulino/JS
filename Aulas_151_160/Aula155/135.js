const config = {
  titulo: "Teste",
  texto: "CFB Cursos",
  cor: "#48f"
}
const cxmsg = new cx(config)
const btn = document.querySelector("#btn_show")
btn.addEventListener("click", (bt)=>{
  cxmsg.mostrar()
})