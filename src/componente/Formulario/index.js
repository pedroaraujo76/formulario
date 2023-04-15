import './form.css'

function Formulario () {
    return(
    <div className="box">

        <span className="borderLine"></span>
        
        <form>

            <h2>Informe seus dados</h2>

            <div className="CaixaTexto">
                <input type="text" required="required"/>
                <span>Nome de usuário</span>
                <i></i>
            </div>

            <div className="CaixaTexto">
                <input type="password" required="required"/>
                <span>Senha</span>
                <i></i>
            </div>

            <div className="Recuperar">
                <a href="#">Recuperar senha</a>
                <a href="#">Cadastrar</a>
            </div>

            <div className='inp-1'><input type="submit" value="Entrar"/></div>
        </form>
  </div>
    )    
}

export default Formulario