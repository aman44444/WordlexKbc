import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2>Sign Up</h2>
        <form>
            <label>Email</label>
            <input type='email' placeholder='wordlexkbc@gmail.com' required/>
            <label>Password</label>
            <input type='password' required/>
            <label>Password Confirmation</label>
            <input type='password' required/>
            <button type="submit">Sign Up</button>
        </form>
        <div>
            Already have an account ? Log In 
        </div>
    </div>
  )
}

export default Signup