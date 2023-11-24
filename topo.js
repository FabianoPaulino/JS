const head_ = document.head
const body = document.body

const topo = document.createElement("div")
topo.style = `display: flex;
justify-content: space-between;
align-items: center;
background-color: gray;`
body.prepend(topo)

//Imagem + div login
topo.innerHTML += `
<div id="logo" class="logo">
    <img id="img" src="../../javascript100.png" type="image/png" title="Curso">
</div>
<div id="login" class="login">
    <p id="matricula">Matricula:</p>
    <p id="nome">Nome:</p>
</div>
`
const img = document.querySelector("#img")
img.style = `width: 100px;
height: 100px;`