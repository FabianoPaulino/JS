const temp = document.querySelector("#p_temp")
const nivel = document.querySelector("#p_nive")
const press = document.querySelector("#p_pres")
const parar = document.querySelector("#btn_txt")

const endpoint = 'http://localhost:8080'
let res = fetch(endpoint)
//console.log(res)

let dados = {
    nome: "Fabiano",
    canal: "CFB Cursos",
    curso: "Javascript"
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const f=()=>{
    fetch(endpoint, cabecalho).then(re=>{
    re.json().then(p=>{
        console.log(p)
        //console.log(p.nivel);
        //temp.innerHTML = `Temeperatura: ${p.temperatura}`
        //nivel.innerHTML = `Nível: ${p.nivel}`    
        //press.innerHTML = `Pressão: ${p.pressao}`
    })
})
} 
//var set = setInterval(f, 1000)

parar.addEventListener("click", ()=>{
    f()
})