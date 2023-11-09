class cursos{
    static cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"] 
    static getallcurses = ()=>{
        return this.cursos;
    }
    static getcurso = (i)=>{
        return this.cursos[i]
    }
    static addcurso = (newcurse)=>{
        this.cursos.push(newcurse)
    }
    static erasecurse = ()=>{
        this.cursos = []
    }
}


export default cursos