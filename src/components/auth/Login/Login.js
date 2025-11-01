import React, { useRef, useState } from 'react'
import "../Auth.css"
import { useAuth } from '../../../Context/AuthContext';

const LogIn = ({onSuccess, onSwitch}) => {
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
      onSuccess?.();
    } catch{
      setError("failed to Log In")
    } finally {
        setLoading(false)
    } }

  return (
    <div className='auth-form'>
        <h2 className='heading'>Log In</h2>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='email' placeholder='Email' required ref={emailRef}/>
            <label>Password</label>
            <input type='password'  placeholder="Password" required ref={passwordRef}/>
            <button disabled={loading} type="submit" className='submitButton'>Log in</button>
        </form>
        <div>
             Need an Account ? <button type="button" onClick={onSwitch} className='linkButton'>Sign up</button>
        </div>
    </div>
  )
}

export default LogIn;