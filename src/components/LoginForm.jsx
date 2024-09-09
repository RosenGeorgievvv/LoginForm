import React from 'react'
import '../styles/login.css';
import {FaUser, FaLock, FaEnvelope} from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className='wrapper'>

        {/* Login form */}
        <div className='form-box login'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>

        {/* Register form */}
        <div className='form-box register'>
            <form action=''>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
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