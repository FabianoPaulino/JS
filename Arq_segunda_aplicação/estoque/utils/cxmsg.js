
class cxmsg {
    constructor(none){
        this.none = none
    }
    static mostrar = (config)=>{
        this.config = config
        const style = document.createElement('style')
        style.setAttribute("id", "stUm")
        style.innerHTML = `
            .cxmsgFundo, .tituloCx, .rodapeCx, .corpoCx{
                display: flex;
            }
            .cxMsg{
                width: 200px;
            }
            .cxmsgFundo{
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100vh;
                margin: auto;
                background-color: rgba(0, 0, 0, 0.603);
                justify-content: center;
                align-items: center;
                z-index: 5; 
            }
            .tituloCx{
                justify-content: space-between;
                align-items: center;
                background-color: ${config.cor};
                color: #fff;
                border-radius: 10px 10px 0px 0px;
                padding: 5px;
            }
            .corpoCx{
                justify-content: flex-start;
                align-items: center;
                background-color: #aaa;
                color: black;
                padding: 5px;

            }
            .rodapeCx{
                justify-content: space-around;
                align-items: center;
                padding: 5px;
                border-radius: 0px 0px 10px 10px;
                background-color: rgb(0, 47, 255);
            }
            
            /*Botôes*/
            .btnCx{
                background-color: rgb(170, 170, 170);
                width: 50px;
                padding: 5px;
                border-radius: 5px;
                text-transform: uppercase;
                border: none;
                cursor: pointer;
            }
            .btnCx:active{
                padding: 4px;
            }
            #btn_Fechar{
                background-color: red;
                width: 20px;
                cursor: pointer;
                border-radius: 5px;
            }
            #btnOk{

            }
            #btnSim{

            }
            #btnNao{

            }
            .ocultar{
                display: none;
            }
        `
        document.head.appendChild(style)

        const cx = document.createElement("div")
        cx.setAttribute("id", "cxmsgFundo")
        cx.setAttribute("class", "cxmsgFundo")
        
        const cxmsg = document.createElement("div")
        cxmsg.setAttribute("class", "cxMsg") 

        const tituloCx = document.createElement("div")
        tituloCx.setAttribute("class", "tituloCx")
        const par = document.createElement("p")
        par.innerHTML =  `${config.titulo}`
        const div = document.createElement("div")
        const img = document.createElement("img")
        img.setAttribute("id", "btn_Fechar")
        img.setAttribute("src", "../../../imgs/close.svg")
        img.setAttribute("alt", "fechar")
        div.appendChild(img)
        tituloCx.appendChild(par)
        tituloCx.appendChild(div)
        cxmsg.appendChild(tituloCx)

        const corpoCx = document.createElement("div")
        corpoCx.setAttribute("class", "corpoCx")
        const parDois = document.createElement("p")
        parDois.innerHTML = `${config.texto}`
        corpoCx.appendChild(parDois)
        cxmsg.appendChild(corpoCx)

        const rodapeCx = document.createElement("div")
        rodapeCx.setAttribute("class","rodapeCx")
        const ids = ["btnOk", "btnSim", "btnNao"]
        const names = ["ok", "sim", "não"]
        const close = ()=>{
            cx.remove()
            style.remove()
        }
        for(let i in ids){
            const bt = document.createElement("button")
            bt.setAttribute("id", `${ids[i]}`)
            bt.setAttribute("class", "btnCx")
            if(this.config.tipo == 0){
                if(i > 0){
                    bt.classList.add("ocultar_2")
                }
            }else{
                if(i == 0){
                    bt.classList.add("ocultar_2")
                }
            }
            bt.innerHTML = names[i]
            bt.addEventListener("click", () => {
                if(i == 0){
                    config.cmdOk()
                    close()
                }else if(i == 1){
                    config.cmdSim()
                    close()
                }else{
                    if(config.cmdNao()){
                        close() 
                    }
                    
                }
            })
            rodapeCx.appendChild(bt)
        } 
        
        cxmsg.appendChild(tituloCx)
        cxmsg.appendChild(corpoCx)
        cxmsg.appendChild(rodapeCx)
        cx.appendChild(cxmsg)

        if(!document.querySelector(".cxmsgFundo")){
            document.body.appendChild(cx)
        }
        const fechar = document.querySelector("#btn_Fechar")
        img.addEventListener("click", ()=>{
            close()
            //location.reload(true)
        })
    }
}
export {cxmsg}