import React, { useRef, useState } from 'react'
import "./SignUp.css";
import { useAuth } from '../../Context/AuthContext';

const LogIn = () => {
  const emailRef =  useRef()
  const passwordRef =  useRef()
  const {login} = useAuth();
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)


async function handleSubmit (e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch{
      setError("failed to Log In")
    }  }

  return (
    <div className='signup-container'>
        <h2>Log In</h2>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='email' placeholder='wordlexkbc@gmail.com' required ref={emailRef}/>
            <label>Password</label>
            <input type='password' required ref={passwordRef}/>
            <button disabled={loading} type="submit">Log in</button>
        </form>
        <div>
             Need an Account ? Sign Up
        </div>
    </div>
  )
}

export default LogIn;