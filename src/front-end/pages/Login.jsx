import React from "react";
import { usuarios } from "../Dados/usuario";

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      senha: '',
      email: '',
    }
  }

  onInputChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  onLogin = (e) => {
    e.preventDefault()
    const { email, senha } = this.state
    if (usuarios.length > 0) {
      const login = usuarios.find((usuario) => usuario.email === email)
      if (!login || login.senha !== senha) {
        alert('email ou senha invalida')
      } else {
        alert('bem-vindo')
      }
    }

  }

  render() {
    return (
      <div>
        <form >
          <label htmlFor="email" >
            email:
            <input type="text" name="email" id="email" onChange={this.onInputChange} />
          </label>
          <label htmlFor="senha">
            senha:
            <input type="password" name="senha" id="senha" onChange={this.onInputChange} />
          </label>
          <button type="button" onClick={this.onLogin}>login</button>
        </form>
      </div>

    )
  }
}

export default Login;