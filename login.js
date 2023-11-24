class login{
    static logado = null
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static endpoint = "http://localhost:8080/"
    static login = (mat, pas)=>{
        this.endpoint += `?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint).then(res=>res.json()).then(res=>{
            if(res){
                this.logado = true
                this.matlogado = mat
                this.nomelogado = res.nome
                this.acessologado = res.acesso
            }else{
                console.log("Usuario não encontrado")
            }
        }).catch(erro=>console.log(erro))
    }
    static show = ()=>{
        const ids = ["baselogin", "corpologin", "elementoslogin", "campologin", "botoeslogin", "logologin"]
        const ids_ = ["f_username", "f_senha", "btn_login", "btn_cancelar"]
        const styles = []
        const fundologin = document.createElement("div")
        fundologin.setAttribute("id","fundologin")
        fundologin.setAttribute("class","fundologin")
        //fundologin.style = styles[]
        //
        ids.map((el, i)=>{
            const create = (tipo, atribute, atributos = [[]], nome, estilo)=>{
                const el = document.createElement(tipo)
                if(atribute){
                    atributos.map((at)=>{
                        el.setAttribute(at[0], at[1])
                    })
                }
                if(nome){
                    el.innerHTML = nome
                }
                el.style = estilo
                return el
            }
            if(i==3){
                for(let id = 0; id < 2; id++){
                    const tt = ["Username", "Senha"]
                    const div = create('div', true, [["id", "campologin"], ["class", "campologin"]], false, [])
                    //input
                    const inp = create("input", true, [["id", `${ids_[id]}`], ["class", `${ids_[id]}`]], false, [])
                    //Label
                    const lab = create("label", true, [["for", `${ids_[id]}`]], tt[id], [])

                    div.appendChild(lab)
                    div.appendChild(inp)
                    
                    const campo = fundologin.querySelector(`.${ids[i-1]}`)
                    campo.appendChild(div)
                }
            }else if(i==4){
                    //div
                    const div = create("div", true, [["id", `botoeslogin`], ["class", `botoeslogin`]], false, [])
                    
                for(let id = 0; id < 2; id++){
                    //button
                    const nm = ["Login", "Cancelar"]
                    const but = create("button", true, [["id", `${ids_[id+2]}`], ["class", `${ids_[id+2]}`], ["type", "buttom"]], nm[id], [])

                    div.appendChild(but)
                    const campo = fundologin.querySelector(`.${ids[i-2]}`)
                    campo.appendChild(div)
                }
            }else{
                //div
                const div = create("div", true, [["id", `${ids[i]}`], ["class", `${ids[i]}`]], false, [])

                if(fundologin.childNodes.length < 1){
                    fundologin.appendChild(div)
                }else{
                    if(i==5){
                        //img
                        const img = create("img", true, [["src", "../../javascript100.png"], ["title", "Javascript"]], false, [])

                        const elelogin = fundologin.querySelector(`.baselogin`)
                        div.appendChild(img)
                        elelogin.appendChild(div)
                    }else{
                        const last = fundologin.querySelector(`.${ids[i-1]}`)
                        last.appendChild(div) 
                    }
                }
            }
        })
        document.body.appendChild(fundologin)
    }
}
export {login}