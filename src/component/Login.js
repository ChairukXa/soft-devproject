import React from 'react'
import {signInWithGoogle} from "../Firebase/firebase"

function Login() {
  return (
    <div>
        <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  )
}

export default Login