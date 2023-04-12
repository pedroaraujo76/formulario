import './form.css'

function Formulario () {
    return(
    <div class="box">

        <span class="borderLine"></span>
        
        <form>

            <h2>Informe seus dados</h2>

            <div class="CaixaTexto">
                <input type="text" required="required"/>
                <span>Nome de usuário</span>
                <i></i>
            </div>

            <div class="CaixaTexto">
                <input type="password" required="required"/>
                <span>Senha</span>
                <i></i>
            </div>

            <div class="Recuperar">
                <a href="#">Recuperar senha</a>
                <a href="#">Cadastrar</a>
            </div>

            <input type="submit" value="Entrar"/>
        </form>
  </div>
    )    
}

export default Formulario