let cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]
let carros = ["Polo", "T-cross", "Golf", "Onix", "Argo", "Cruze", "Cronos"]

export default function getcursos(){
    return carros
}
function getcurso_1(id){
    return carros[id]
}

export{cursos, getcurso_1}

