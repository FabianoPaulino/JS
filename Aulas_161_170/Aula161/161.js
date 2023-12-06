const btn = [...document.querySelectorAll(".btn")]
const header = document.querySelector(".cabecalho")
const principal = document.querySelector(".principal")

btn.map((btn_el)=>{
    btn_el.addEventListener("click", (el)=>{
        const ide = `${el.target.id}`
        switch(ide){
            case 'btnHome':
                console.log("Enfim")
                break;
            case 'btnNovo':
                console.log("2")
                break;
            case 'btnPesquisar':
                console.log("3")
                break;
            case 'btnGestao':
                console.log("4")
                break;
            default:
                console.log("5")
        }
    })  
})
