import React from 'react'

import {auth} from "../Firebase/firebase"

function Logout({ user}) {
  return (
    <div>
        <h1>Hello, {user.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Logout