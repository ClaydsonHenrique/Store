import React, { useEffect } from 'react'
import useForm from '../Hooks/useForm'
import Input from './Input'
import { addDataUser, addLogin, addToken } from '../Redux/actions'
import { getMethodIfToken, MethodPost } from '../FetchApi/ApiProducts'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'



export default function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const email = useForm('email');
  const password = useForm('password');
  const [error, setError] = React.useState(null);
  const [viewPass, setViewPass] = React.useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(email.validate() && password.validate) {
      const response = await MethodPost({email: email.value, password:password.value}, 'login')
      if(!response.ok) {
        setError(response.message)
      }
      const token = await response.token
      const dataUser = await getMethodIfToken(token, 'login')
      
      dispatch(addToken(token))
      dispatch(addLogin(true))
      dispatch(addDataUser(dataUser))
      
      window.localStorage.setItem('token', token)
      navigate('/')
      
    } 
  }
  
  const autoLogin = React.useCallback(async () => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const dataUser = await getMethodIfToken(token, 'login')
      if (!dataUser.message) {
        dispatch(addDataUser(dataUser))
        dispatch(addLogin(true))
        navigate('/')
      } else {
        window.localStorage.removeItem('token')
        dispatch(addLogin(false))
        dispatch(addDataUser(''))
      }
    }
  }, [dispatch, navigate,])

  useEffect(() => {
    autoLogin()
  }, [autoLogin])
  
  const ViewPassword = () => {
    setViewPass(!viewPass)
  }
  
  
  return (
    <section>
      <h1 className='Title-Login'>Login</h1>
      <form className='Form-Login' onSubmit={handleSubmit}>
        <Input label='usuario' type='text' name='email' {...email} />
        <Input label='senha' type={viewPass ? 'text' : 'password'} name='password' {...password} />
        {error && <p className='Error-Login'>{error}</p>}
        <button className='Button-Login'>Entrar</button>
        <Link to='forgotPassword'> esqueceu a senha</Link>
      </form>
      <button onClick={ViewPassword}>ver senha</button>
    </section>
  )
}
