class cx{
    static cor = "#888"
    static destino = null
    static divmsg = null
    static tipo = null
    static comando_sn = null
    static texto = []
    static mostrar = (config, titulo, texto)=>{
        this.texto = config.texto
        this.cor = config.cor
        this.tipo = config.tipo
        this.comando_sn = ()=>{config.comando_sn()}
        this.destino = document.body

        this.divmsg = document.createElement("div")
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.style = `
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0,0.3);
        `
        
        const areacxmgs = document.createElement("div")
        areacxmgs.setAttribute("id", "areacxmsg")
        areacxmgs.style = `
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 300px;
        `

        const titulocxmsg = document.createElement("div")
        titulocxmsg.setAttribute("id", "titcxmsg")
        titulocxmsg.innerHTML = titulo
        titulocxmsg.style = `
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        background-color: ${this.cor};
        color: #fff;
        padding: 5px;
        border-radius: 5px 5px 0px 0px;
        `
        const corpocxmsg = document.createElement("div")
        corpocxmsg.setAttribute("id", "corpocxmsg")
        corpocxmsg.innerHTML = texto
        corpocxmsg.style = `
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        background-color: #eee;
        color: #000;
        padding: 30px 5px;
        `

        const rodapecxmsg = document.createElement("div")
        rodapecxmsg.setAttribute("id", "rodapecxmsg")
        rodapecxmsg.style = `
        display: flex;
        justify-content: flex-start;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #ccc;
        color: #000;
        padding: px;
        border-radius: 0px 5px`

        const style_btn = `
        background-color: ${this.cor};
        color: #fff;
        padding: 10px 50px;
        border: 1px solid blue; 
        border-radius: 5px;
        cursor: pointer;
        text-transform: uppercase;
        margin: 2px;
        `
        if(this.tipo == "ok"){
            const btn_ok = document.createElement
            ("buttom")
            btn_ok.setAttribute("id", "btn_ok")
            btn_ok.innerHTML = "OK"
            btn_ok.style = style_btn
            btn_ok.addEventListener("click", ()=>{
                this.ocultar()
                this.comando_sn()
            })
            rodapecxmsg.appendChild(btn_ok)
        }else if(this.tipo == "sn"){
            const btn_s = document.createElement
            ("buttom")
            btn_s.setAttribute("id", "btn_s")
            btn_s.innerHTML = this.texto[0]
            btn_s.style = style_btn

            const btn_n = document.createElement
            ("buttom")
            btn_n.setAttribute("id", "btn_n")
            btn_n.innerHTML = this.texto[1]
            btn_n.style = style_btn
            rodapecxmsg.appendChild(btn_s)
            rodapecxmsg.appendChild(btn_n)
        }
        
        areacxmgs.appendChild(titulocxmsg)
        areacxmgs.appendChild(corpocxmsg)
        areacxmgs.appendChild(rodapecxmsg)
        this.divmsg.appendChild(areacxmgs)
        this.destino.prepend(this.divmsg)
        
        divmsg.addEventListener("click", ()=>{
            this.ocultar()
        })
    }
    static ocultar = ()=>{
        this.divmsg.remove()
    }
}
export {cx}