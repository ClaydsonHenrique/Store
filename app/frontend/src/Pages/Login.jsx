import React from 'react';
import LoginForm from '../Components/LoginForm.jsx';
import CreatUser from '../Components/CreatUser.jsx';

function Login() {
  return (
    <main className='Container-Login'>
      <LoginForm/>
      <CreatUser />
    </main>
  )
}



export default Login;