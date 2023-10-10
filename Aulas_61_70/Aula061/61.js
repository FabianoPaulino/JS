const pessoa={
    nome:"Pessoa", idade:15, pro:"en",
    getnome:function(){
        return this.nome
    },
    setnome:function(n){
        this.nome = n
    },
    setid:function(n){
        this.idade = n
    },
    setpro:function(n){
        this.pro = n
    }
}

const p2 = pessoa
const p3 = pessoa

p3.nome = "P"
p2.setid(25)
p2.setpro("Enginer")
p2["nome"] = "Patrick"
pessoa.setnome("Bob")
console.log(pessoa.nome + pessoa.pro + pessoa.idade)
console.log(p2.getnome())
console.log(p3.nome)
