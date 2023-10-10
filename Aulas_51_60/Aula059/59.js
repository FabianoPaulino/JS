class pessoa{
    constructor(n, i){
        this.nome = n + ""
        this.idade = +i 
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.idade}`)
        console.log(`___________________`)
    }
    getnome(){
        return this.nome
    }
    getidade(){
        return this.idade
    }
    setnome(nm){
        this.nome = nm
    }
    setidade(id){
        this.nome = id
    }
}
const but = document.getElementById("btn")
var res = document.querySelector(".res")
const in1 = document.getElementById("f_nome")
const in2 = document.getElementById("f_idade")

let pessoas = []

const addp = ()=>{
    res.innerHTML = ""
    pessoas.map((p)=>{ 
        const d = document.createElement("div")
        d.setAttribute("class", "person")
        d.innerHTML = `Nome: ${p.getnome()} - Idade: ${p.getidade()}` 
        res.appendChild(d)
    })
}

but.addEventListener("click", ()=>{      
        var n1 = new pessoa(in1.value, in2.value)
        if(n1.getnome().length == 0 || n1.getidade() == 0){alert("Dados inválidos")}else{
            pessoas.push(new pessoa(in1.value, in2.value))
            /*`O nome da pessoa é ${n1.nome} e sua idade é ${n1.idade}`*/
            console.log(pessoas)
            in1.value=""
            in2.value=""
            in1.focus()
            in2.focus()   
            addp()
    }
})