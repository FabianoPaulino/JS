
const show = 
`<div id="novoColaborador" class="popup">
    <div class="janelaPopup">
        <div class="tituloPopup">
            <div>
                Novo super usuário
            </div>
            <img src="../../../imgs/close.svg" alt="close" class="btnJanelaOpera" id="btnFechar">
        </div>
        <div class="corpoPopup">
            <div class="campoForm">
                <label for="f_nome">Super usuário</label>
                <input type="text" name="f_nome" id="f_nome">
            </div>
            <div class="campoForm">
                <label for="f_status">Status do super usuário</label>
                <select name="f_status" id="f_status">
                    <option value="A">Ativo</option>
                    <option value="I">Inativo</option>
                </select>
            </div>
            <div class="campoForm">
                <label for="f_foto">Foto</label>
                <input type="file" name="f_foto" id="f_foto" accept="image/png, image/jpeg, image/jpg">
                <div id="campoImagem">
                    <img src="" alt="Imagem" id="img_foto" class="img_foto" onerror="this.classList.add('sem-imagem')">
                </div>
            </div>
            <div class="campoForm">
                <label for="f_tel">Telefones</label>
                <input type="number" name="f_tel" id="f_tel">
                <div id="telefones">
                </div>
            </div>
        </div>
        <div class="rodapePopup">
            <button id="btnGravar" class="btnComandoPopup">Gravar</button>
            <button id="btnCancelar" class="btnComandoPopup">Cancelar</button>
        </div>
    </div>
</div>`
const editar = 
`<div id="novoColaborador" class="popup">
        <div class="janelaPopup">
            <div class="tituloPopup">
                <div>
                    Editar super usuário
                </div>
                <img src="../../../imgs/close.svg" alt="close" class="btnJanelaOpera" id="btnFechar">
            </div>
            <div class="corpoPopup">
                <div class="campoForm">
                    <label for="f_nome">Super usuário</label>
                    <input type="text" name="f_nome" id="f_nome" value="">
                </div>
                <div class="campoForm">
                    <label for="f_foto">Foto</label>
                    <input type="file" name="f_foto" id="f_foto" accept="image/png, image/jpeg, image/jpg">
                    <div id="campoImagem">
                        <img src="" alt="Imagem" id="img_foto" class="img_foto" onerror="this.classList.add('sem-imagem')">
                    </div>
                </div>
                    <div class="campoForm">
                    <label for="f_tel">Telefones</label>
                    <input type="number" name="f_tel" id="f_tel">
                    <div id="telefones">
                    </div>
                </div>
            </div>
            <div class="rodapePopup">
                <button id="btneditar" class="btnComandoPopup">Confirmar</button>
                <button id="btnCancelar" class="btnComandoPopup">Cancelar</button>
            </div>
        </div>
    </div>`
import {Janela} from "../Lista/Lista.js"
const janela =  new Janela(".Janela", "super usuário", editar, show, 5).chamada(null)
//Botão pesquisar
const pesquisa = document.querySelector("#btnsrc").addEventListener("click", ()=>{
    const janela = new Janela(".Janela", "super usuário", editar, show, 5).pesquisa()
})
//Botão Listar
const listar = document.querySelector("#btnlist").addEventListener("click", ()=>{
    location.reload(true);
})