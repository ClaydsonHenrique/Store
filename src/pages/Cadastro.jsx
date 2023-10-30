import React from "react";
import { usuarios, cadastro } from "../Dados/usuario";

class Cadastro extends React.Component {
  constructor() {
    super()
    this.state = {
      tipo: 'password',
      valido: true,
      senha: '',
      confirmarSenha: '',
      email: '',
      nome: '',
      sobrenome: '',
      disbled: true,
    }
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value }, this.validationInputs)
  }


  validationInputs = () => {
    const { senha, confirmarSenha, email, sobrenome, nome, } = this.state
    const valida = (
      nome.length > 3
      && email.length > 3
      && sobrenome.length > 3
      && senha.length >= 6
      && confirmarSenha.length >= 6
      && senha === confirmarSenha);
    if (senha !== confirmarSenha && confirmarSenha.length >= 6) {
      this.setState({ valido: false })
    } else {
      this.setState({ valido: true })
    }
    if (!valida) {
      this.setState({ disbled: true })
    } else if (valida) {
      this.setState({ disbled: false })
    }
  }


  viewPassword = () => {
    const { tipo } = this.state
    if (tipo !== 'password') {
      this.setState({ tipo: 'password' })
    } else {
      this.setState({ tipo: 'text' })
    }
  }
  cadastrar = (e) => {
    e.preventDefault();
    const { email, sobrenome, nome, senha,  } = this.state
    cadastro({ name: nome, lastName: sobrenome, senha: senha, email: email });
    this.setState({ email: '', sobrenome: '', nome: '', senha: '', confirmarSenha: '' })
  }

  render() {
    const { tipo, valido, email, sobrenome, nome, senha, confirmarSenha, disbled } = this.state
    return (
      <div>
        <form onSubmit={this.cadastrar} >
          <label htmlFor="Name">
            Nome:
            <input type="text" id="name" name='nome' value={nome} onChange={this.onHandleChange} />
            <label htmlFor="lastaName">
            </label>
            Sobrenome
            <input type="text" id="lastaName" name="sobrenome" value={sobrenome} onChange={this.onHandleChange} />
          </label>
          <label htmlFor="email">
            email:
            <input type="email" id="email" name='email' value={email} onChange={this.onHandleChange} />
          </label>
          <label htmlFor="senha">
            Senha:
            <input type={tipo} id="senha" name='senha' value={senha} onChange={this.onHandleChange} />
          </label>
          <label htmlFor="confirmarSenha">
            digite a Senha novamente:
            <input type={tipo} id="confirmarSenha" name='confirmarSenha' value={confirmarSenha} onChange={this.onHandleChange} />
            <button onClick={this.viewPassword} type="button"> 👁 </button>
          </label>
          {valido ? '' : <p> senha nao correspondem</p>}
          <button disabled={disbled} >Cadastrar</button>
        </form>
      </div>
    )
  }
}

export default Cadastro;