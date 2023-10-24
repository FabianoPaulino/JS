const bta = document.querySelector("#btn_alert")
const btc = document.querySelector("#btn_confirm")
const btp = document.querySelector("#btn_prompt")
bta.addEventListener("click", ()=>{
   alert("Alerta geral!!!!!!!!!!!!!!!")
})
btc.addEventListener("click", ()=>{
   confirm("Aperta e confirma!")
})
btp.addEventListener("click", ()=>{
   const msg = prompt("O que?")
   alert(msg)
})