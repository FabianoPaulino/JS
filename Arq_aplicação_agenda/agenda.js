const btn = [...document.querySelectorAll(".btn")]
const header = document.querySelector(".cabecalho")
const principal = document.querySelector(".principal")
const subAba = document.createElement("div")
subAba.setAttribute("class", "subAba")

btn.map((btn_el)=>{
    const preSelected = document.querySelector(".abaSelect")
    preSelected.appendChild(subAba)
    btn_el.addEventListener("click", (el)=>{
        btn.map((el)=>{
            el.classList.remove("abaSelect")
        })
        const ide = `${el.target.id}`
        const selectedAba = document.querySelector(`#${ide}`)
        selectedAba.classList.add("abaSelect")
        selectedAba.appendChild(subAba)
        switch(ide){
        case 'btnHome':
            window.open("home.html", "if_principal")
            break;
        case 'btnNovo':
            window.open("novo.html", "if_principal")
            break;
        case 'btnPesquisar':
            window.open("pesquisar.html", "if_principal")
            break;
        case 'btnGestao':
            window.open("gestao.html", "if_principal")
            break;
        case 'btnFiltrar':
            window.open("filtrar.html", "if_principal")
            break;
        default:
            window.open("sobre.html", "if_principal")
        }
    })  
})
