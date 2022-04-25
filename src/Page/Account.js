import React,{ useState , useEffect } from 'react'
import firebase from '../Firebase/firebase'
import Login from '../component/Login'
import Logout from '../component/Logout';

const Account = () => {
  const [user,setUser] = useState(null);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  },[])

  console.log(user);

  return (
    <section className='Word'>
        {user? <Logout user={user} /> : <Login />}
    </section>  
  )
}

export default Account