class login{
    static logado = null
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static estilo = null
    static config = null
    static callback_ok = null
    static callback_nok = null
    //static mat = null
    //static pas = null
    static config = {
        cor: null,
        img: null,
        endpoint: null
    }
    //static endpoint = "http://localhost:8080/"
    static login = (callback_ok, callback_nok, config)=>{
        this.config = config
        this.callback_ok = ()=>{
            callback_ok()
        }
        this.callback_nok = ()=>{
            callback_nok()
        }
        this.estilo = `.fundologin{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: rgba(0,0,0,0.50);
            
        }
        .baselogin{
            display: flex;
            justify-content: center;
            align-items: stretch;
            width: 50%;
            box-sizing: inherit;
            
        }
        .elementoslogin{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            height: 100%;
            background-color: #eee;
            flex-direction: column;
            border-radius: 10px 0px 0px 10px;
            padding: 5px;
            box-sizing: inherit;
            
        }
        .logologin{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25%;
            background-color: #bbb;
            padding: 10px;
            border-radius: 0px 10px 10px 0px;
            box-sizing: inherit;
            
        }
        .logologin .img{
            width: 90%;
            box-sizing: inherit;
            
        }
        .campologin{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            box-sizing: inherit;
            margin-bottom: 10px;
            width: 100%;
            
        }
        .campologin input{
            font-size: 16px;
            padding: 5px;
            background-color: #fff;
            border-radius: 5px;
            width: 98%;
            
        }
        .campologin label{
            font-size: 16px;
            
        }
        .botoeslogin{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            box-sizing: inherit;
            
        }
        .botoeslogin button{
            cursor: pointer;
            background-color: ${this.config.cor};
            color: #fff;
            border-radius: 5px;
            padding: 10px;
            width: 90%;
            margin: 2px;
            box-sizing: inherit;
            
        }`
        
        const estilo = document.createElement("style")
        estilo.setAttribute("id", "log")
        estilo.innerHTML = this.estilo
        document.head.appendChild(estilo)
    
        const fundologin = document.createElement("div")
        fundologin.setAttribute('id', "fundologin")
        fundologin.setAttribute('class', "fundologin")
        document.body.prepend(fundologin)

        const baselogin = document.createElement("div")
        baselogin.setAttribute('id', "baselogin")
        baselogin.setAttribute('class', "baselogin")
        fundologin.appendChild(baselogin)

        const elementoslogin = document.createElement("div")
        elementoslogin.setAttribute('id', "elementoslogin")
        elementoslogin.setAttribute('class', "elementoslogin")
        baselogin.appendChild(elementoslogin)
        // input
        const campologin = document.createElement("div")
        campologin.setAttribute('id', "campologin")
        campologin.setAttribute('class', "campologin")
        elementoslogin.appendChild(campologin)

        const label = document.createElement("label")
        label.setAttribute("for", "f_username")
        label.innerHTML = "Username"
        campologin.appendChild(label)

        const input = document.createElement("input")
        input.setAttribute('id', "f_username")
        input.setAttribute('name', "f_username")
        input.setAttribute('type', "text")
        campologin.appendChild(input)
        // input
        const campologin_2 = document.createElement("div")
        campologin_2.setAttribute('id', "campologin_2")
        campologin_2.setAttribute('class', "campologin")
        elementoslogin.appendChild(campologin_2)

        const label_2 = document.createElement("label")
        label_2.innerHTML = "Senha"
        label_2.setAttribute("for", "f_senha")
        campologin_2.appendChild(label_2)
        
        const input_2 = document.createElement("input")
        input_2.setAttribute('id', "f_senha")
        input_2.setAttribute('name', "f_senha")
        input_2.setAttribute('type', "password")
        campologin_2.appendChild(input_2)
        // botoes
        const botoeslogin = document.createElement("div")
        botoeslogin.setAttribute('id', "botoeslogin")
        botoeslogin.setAttribute('class', "botoeslogin")
        elementoslogin.appendChild(botoeslogin)

        const botao_l = document.createElement("button")
        botao_l.setAttribute('id', "btn_login")
        botao_l.setAttribute('type', "button")
        botao_l.innerHTML = "Login"
        botoeslogin.appendChild(botao_l)
        //Evento
        botao_l.addEventListener("click", ()=>{
           this.verificalog()
        })
        const botao_c = document.createElement("button")
        botao_c.setAttribute('id', "btn_cancelar")
        botao_c.setAttribute('type', "button")
        botao_c.innerHTML = "Cancelar"
        //Evento
        botao_c.addEventListener("click", ()=>{
            this.remove()
        })
        botoeslogin.appendChild(botao_c)
        // imagem
        const logologin = document.createElement("div")
        logologin.setAttribute("id", "logologin")
        logologin.setAttribute("class", "logologin")
        baselogin.appendChild(logologin)

        const img = document.createElement("img")
        img.setAttribute("src", `${this.config.img}`)
        img.setAttribute("title", "Curso")
        logologin.appendChild(img)
    }
    static remove = ()=>{
        const fundologin = document.getElementById("fundologin")
        fundologin.remove()
        const estilo = document.getElementById("log")
        estilo.remove()
    }
    static verificalog = ()=>{
        const mat = document.querySelector("#f_username").value
        const pas = document.querySelector("#f_senha").value
        const endp = `${this.config.endpoint}?matricula=${mat}&senha=${pas}`
        fetch(endp).then(res=>res.json()).then(res=>{
            if(res){
                this.logado = true;
                this.matlogado = mat
                this.nomelogado = res.nome
                this.acessologado = res.acesso
                this.remove()
                this.callback_ok()
            }else{
                this.logado = false;
                this.callback_nok()
            }
        }).catch(erro=>{
            console.log(erro)
        })
    }
    /*static show = ()=>{

        



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
                    const tp = ["text", "password"]
                    const div = create('div', true, [["id", "campologin"], ["class", "campologin"]], false, [])
                    //input
                    const inp = create("input", true, [["id", `${ids_[id]}`], ["class", `${ids_[id]}`], ["type", `${tp[id]}`]], false, [])
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
                    const but = create("button", true, [["id", `${ids_[id+2]}`], ["class", `${ids_[id+2]}`], ["type", "button"]], nm[id], [])

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
                        const img = create("img", true, [["src", this.config.img], ["title", "Javascript"]], false, [])

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
    }*/
}
export {login}