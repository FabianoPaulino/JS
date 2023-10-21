const hr = document.getElementById("dt")
const rel = document.getElementById("rel")

const btna = document.querySelector("#btn_ativar")
const btnd = document.querySelector("#btn_parar")
const temp_a = document.getElementById("tmp_alarme")
const hora_a = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")
const aud = document.createElement("audio")
const imp = document.createElement("source")

aud.setAttribute("class", "music")
imp.setAttribute("src", "Som de alarme Iphone.mp3")
imp.setAttribute("type", "audio/mp3")
aud.appendChild(imp)
timer.appendChild(aud)

const play = [...document.getElementsByClassName("music")][0]

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false;
let alarme_tocando = false;

btna.addEventListener("click", ()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual+(temp_a.value*1000)
    alarme_ativado = true
    alarme_tocando = true
    const dt_alarme = new Date(ts_alarme)

    let hora = dt_alarme.getHours();
    let minuto = dt_alarme.getMinutes();
    let segundos = dt_alarme.getSeconds()
    hora = hora < 10 ? "0" + hora : hora
    minuto = minuto < 10 ? "0" + minuto : minuto
    segundos = segundos < 10 ? "0" + segundos : segundos
    let hora_n = "Hora do alarme: " + hora + ":" + minuto + ":" + segundos
    hora_a.innerHTML = hora_n
})
btnd.addEventListener("click", ()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_a.innerHTML = "Hora do alarme: "
    temp_a.value = 0
    timer.classList.remove("alarme")
    pauseAudio()
})
    const data = new Date()
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear()
    mes = mes < 10 ? "0" + mes : mes
    dia = dia < 10 ? "0" + dia : dia
    let data_n = dia + "/" + mes+ "/" + ano
    hr.innerHTML = data_n

const relogio = ()=>{
    const data = new Date()
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds()
    hora = hora < 10 ? "0" + hora : hora
    minuto = minuto < 10 ? "0" + minuto : minuto
    segundos = segundos < 10 ? "0" + segundos : segundos
    let hora_t = hora + ":" + minuto + ":" + segundos
    rel.innerHTML = hora_t
    if(alarme_tocando && alarme_ativado){
        if(data.getTime()>=ts_alarme){
           alarme_tocando = true 
           playAudio()
           timer.classList.add("alarme")
        }
        
    }
}

setInterval(relogio, 1000)

function playAudio() {
    play.play();
  }
  
  function pauseAudio() {
    play.pause();
  }