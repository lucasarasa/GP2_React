import "./stylesLogin.css";

export function Login() {
  return (
    <>
      <fieldset className="box-form">
        <h1 className="box-form-login">Login</h1>
        <div className="box-form-border"></div>

        <div className="box">
          <div className="box-form-input">
            <div className="box-form-input-one">
              <label className="box-form-label-email" htmlFor="">Seu e-mail</label>
              <input className="box-form-input-email" placeholder="exemplo@email.com" type="text" /> 
            </div>
            <div className="box-form-input-two">
              <label className="box-form-label-senha" htmlFor="">Sua senha</label>
              <input className="box-form-input-senha" placeholder="1234" type="text" />
            </div>
          </div>

          <div className="box-form-checkbox">
            <input type="checkbox" />
            <label className="box-form-label-checkbox" htmlFor="manter-logado">Manter-me logado</label>
          </div>

          <input type="submit" className="box-form-button" />
        </div>
        <div className="box-form-cad">
          <p className="box-form-cad-text">Ainda não tem conta?</p>
          <a className="box-form-cad-link" href="#">
            <p>Cadastre-se</p>
          </a>
        </div>
      </fieldset>
    </>
  );
}
