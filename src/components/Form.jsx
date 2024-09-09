import React from 'react'
import '../styles/style.css';
import {FaUser, FaLock, FaEnvelope} from 'react-icons/fa';

const Form = () => {

    const [action, setAction] = useState('');
    
    const registerLink = () => {
        setAction('active');
    }

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

                <div className='register-link'>
                    <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a></p>
                </div>
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
                    <input type='email' placeholder='Email' required />
                    <FaEnvelope className='icon' />
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

export default Form;