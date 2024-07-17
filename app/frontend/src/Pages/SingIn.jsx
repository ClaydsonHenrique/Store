import { Link } from 'react-router-dom';

function SingIn () {
  const handleSubmit = () => {
    console.log('submit');
  }
  return (
    <div className="SingIn">
      <div>
        <ul>
          <li><Link to = '/login'>Login</Link></li>
          <li><Link to = '/'>Home</Link></li>
        </ul>
      </div>
      <h1>Sign In</h1>
      <form className='form-singIn' onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" placeholder='usermane' />
        <input type="text" name="email" id="email" placeholder='email' />
        <input type="text" name="endereço" id="endereço" placeholder='endereço' />
        <input type="number" name="cep" id="cep" placeholder='cep' />
        <input type="password" name="password" id="password" placeholder='password' />
      </form>
    </div>
  )
}

export default SingIn