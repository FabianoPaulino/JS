const bt = document.querySelector("#btn_ir")
const inp = document.querySelector("#url")

bt.addEventListener("click", ()=>{
    window.location.href = inp.value
    //window.location.href="https://www.google.com"
    //window.location.replace("https://www.google.com")//Remove a página atual e abre a url no lugar dela 
    //window.location.assign("https://www.google.com")//Vai para a pagina
    //window.location.reload()//Recarrega a página
    //console.log(window.history)
})