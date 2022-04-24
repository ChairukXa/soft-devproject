import React from 'react'
import { Link ,Route, Switch } from 'react-router-dom'
import DarkMagicianArchetype from './DarkMagicianArchetype'
import './page.css'
import '../component/Archetype.css'

const Archetype = () => {
  return (
    <div className='Archetype'>
      <div className='PageHeader'>
        <h1>Archetype Menu</h1>
      </div>
      <ul className='Arch-Links'>
        <div>          
          <Link to="/*"><img src='./image/archetypebanner/Wait Banner.png' alt=''/></Link>
        </div>
        <div>         
          <Link to="/dark-magician-archetype"><img src='./image/archetypebanner/Dark Magician Banner.png' alt=''/></Link>
        </div>
        <div>      
          <Link to="/*"><img src='./image/archetypebanner/Wait Banner.png' alt=''/></Link>
        </div>
        <div>          
          <Link to="/*"><img src='./image/archetypebanner/Wait Banner.png' alt=''/></Link>
        </div>
        <div>          
          <Link to="/*"><img src='./image/archetypebanner/Wait Banner.png' alt=''/></Link>
        </div>
        <div>          
          <Link to="/*"><img src='./image/archetypebanner/Wait Banner.png' alt=''/></Link>
        </div>
        </ul>
        <Switch>
          <Route path="/dark-magician-archetype"><DarkMagicianArchetype /></Route>
        </Switch>
    </div>
  )
}

export default Archetype