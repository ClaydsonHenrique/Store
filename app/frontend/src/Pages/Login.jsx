import { useState } from 'react';
import { MethodPost } from '../FetchApi/ApiProducts';
import { connect } from 'react-redux';
import { addToken } from '../Redux/actions/index.js';
import { Link, useNavigate } from 'react-router-dom';


function Login({ addToken }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleChangeEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
  }
  const handleChangePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
    console.log(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { email, password }
    try {
      const response = await MethodPost(product, 'login')
      if (response && response.token) {
        addToken(response.token);
        setError('');
        navigate('/product')
      } else {
        setError(response.message);

      }
    } catch (error) {
      setError(error, 'invalid server')
      console.log(setError, 'verificando error')
    }
  }
  
  const NavigateSingIn = () => {
    navigate('/register')
  }

  return (
    <main className='Container-Login'>
      <nav>
        <ul>
          <li><Link to = '/product'>home</Link></li>
        </ul>
      </nav>
      <div className='Container-Login-Form'>
        <h1 className='Title-Login'>Login</h1>
        <form className='Form-Login' onSubmit={handleSubmit}>
          <input className='Input-Login' type="text" placeholder='Email' name='email' value={email} onChange={handleChangeEmail} />
          <input className='Input-Login' type="password" placeholder='Senha' name='password' value={password} onChange={handleChangePassword} />
          <button className='Button-Login'>Entrar</button>
        </form>
        {error && <p>{error}</p>}
        <div>
          <button className='buton-router-signUp' onClick={NavigateSingIn}>cadastrar</button>
        </div>
      </div>
    </main>
  )
}

const mapDispatchToProps = {
  addToken,
};

export default connect(null, mapDispatchToProps)(Login);