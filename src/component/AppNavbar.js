import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./AppNavbar.css"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const AppNavbar = () => {
  const [Moblie,setMoblie] = useState(false)
  return (
    <nav className='Navbar'>
      <div className='contrainer'> 
        <h3 className='logo'>YGO Community</h3> 
        <ul className={Moblie? "Nav-Links-moblie":'Nav-Links'} onClick={()=>setMoblie(false)}>
          <Link to="/soft-devproject"><li>Home</li></Link>
          <Link to="/rulebook"><li>RuleBook</li></Link>
          <Link to="/archetype"><li>Archetype</li></Link>
          <Link to="/search"><li>Search</li></Link>
          <Link to="/account"><li>Sign-In</li></Link>
        </ul>
        <button className='Moblie_menu_icon' onClick={()=>setMoblie(!Moblie)}>
          {Moblie? < ImCross/>: <FaBars/> }
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default AppNavbar