import React, { useRef, useState } from 'react'
import "../Auth.css"
import { useAuth } from '../../../Context/AuthContext';

const Signup = ({onSwitch}) => {
  const emailRef =  useRef()
  const passwordRef =  useRef()
  const passwordConfirmRef =  useRef()
  const {signup} = useAuth();
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)


async function handleSubmit (e) {
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Password do not match");
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch{
      setError("failed to create an account")
    }  }

  return (
    <div className='auth-form'>
        <h2 className='heading'>Sign Up</h2>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='email' placeholder='wordlexkbc@gmail.com' required ref={emailRef}/>
            <label>Password</label>
            <input type='password' required ref={passwordRef}/>
            <label>Password Confirmation</label>
            <input type='password' required ref={passwordConfirmRef}/>
            <button disabled={loading} type="submit" className='submitButton'>Sign Up</button>
        </form>
        <div>
          Already have an account? <button type="button" onClick={onSwitch} className='linkButton'>Log in</button>
        </div>
    </div>
  )
}

export default Signup;