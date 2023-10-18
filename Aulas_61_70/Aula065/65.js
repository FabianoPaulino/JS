const person={
    nome: "Bruno",
    canal: "CFB",
    curso: "JavaScript",
    aulas:{
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional"
    }
}
console.log(person.aulas.aula01)

const str = '{"nome":"Bruno","canal":"CFB","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}' 
const s_json = JSON.stringify(person)
const o_json = JSON.parse(str)

console.log(s_json)
console.log(o_json)