import React, { useRef } from 'react'
import "./SignUp.css";

const Signup = () => {
  const emailRef =  useRef()
  const passwordRef =  useRef()
  const passwordConfirmRef =  useRef()
  return (
    <div className='signup-container'>
        <h2>Sign Up</h2>
        <form >
            <label>Email</label>
            <input type='email' placeholder='wordlexkbc@gmail.com' required ref={emailRef}/>
            <label>Password</label>
            <input type='password' required ref={passwordRef}/>
            <label>Password Confirmation</label>
            <input type='password' required ref={passwordConfirmRef}/>
            <button type="submit">Sign Up</button>
        </form>
        <div>
            Already have an account ? Log In 
        </div>
    </div>
  )
}

export default Signup