const tmp = document.querySelector("#tmp")
const nvl = document.querySelector("#nvl")
const prs = document.querySelector("#prs")

let dados = {
    _temperatura: 0,
    _pressao: 0,
    _nivel: 0,
    set valores(val){
        this._temperatura = val.temperatura
        this._nivel = val.nivel
        this._pressao = val.pressao
        tmp.innerHTML = this._temperatura
        nvl.innerHTML = this._nivel
        prs.innerHTML = this._pressao
    },
    get valores(){
        return [this._temperatura, this._nivel, this._pressao]
    }
}
const buscardata = ()=>{
    const end = "http://localhost:8080"
    fetch(end).then(res=>res.json()).then(res=>{
    dados.valores = res
    //console.log(dados.valores)
}).catch(erro=>console.log(erro))
}
let inter = setInterval(buscardata, 1000)

