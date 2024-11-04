import { useState, useEffect } from "react";
import "./Login.css";
import { api } from "../../api/api";

export function Login() {
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = async () => {
    const response = await api.get('/posts')
    setUsername(response.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {username, password}

    const response = await api.post("/posts", newUser)
  }
  return (
    <>
      <fieldset className="box-form">
        <form onSubmit={handleSubmit}>
          <div className="box-form-top">
            <h1 className="box-form-login">Login</h1>
            <div className="box-form-border"></div>
          </div>

        <div className="box">
          <div className="box-form-input">
            <div className="box-form-input-one">
              <label className="box-form-label-email" htmlFor="">Seu e-mail</label>
              <input className="box-form-input-email" onChange={(e) => setUsername(e.target.value)} required placeholder="exemplo@email.com" type="text" /> 
            </div>
            <div className="box-form-input-two">
              <label className="box-form-label-senha" htmlFor="">Sua senha</label>
              <input className="box-form-input-senha" onChange={(e) => setPassword(e.target.value)} required placeholder="1234" type="text" />
            </div>
          </div>

          <div className="box-form-checkbox">
            <input type="checkbox" />
            <label className="box-form-label-checkbox" htmlFor="manter-logado">Manter-me logado</label>
          </div>

          <input type="submit" className="box-form-button" value="Logar" />
        </div>
        <div className="box-form-cad">
          <p className="box-form-cad-text">Ainda não tem conta?</p>
          <a className="box-form-cad-link" href="#">
            <p>Cadastre-se</p>
          </a>
        </div>
        </form>
      </fieldset>
    </>
  );
}
