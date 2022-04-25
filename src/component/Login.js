import React from 'react'
import {signInWithGoogle} from "../Firebase/firebase"
import "./Button.css"
function Login() {
  return (
    <div className='btnLogin'>
        <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  )
}

export default Login