import React from 'react'
import '../styles/login.css';

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <div className='form-box login'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='password' required />
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm