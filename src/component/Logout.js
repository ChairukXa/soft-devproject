import React from 'react'
import {auth} from "../Firebase/firebase"
import "./Button.css"

function Logout({ user}) {
  return (
    <div>
        <h1>ยินดีต้อนรับ<br/>{user.displayName}</h1>
        <div className='btnLogout'>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>  
    </div>
  )
}

export default Logout