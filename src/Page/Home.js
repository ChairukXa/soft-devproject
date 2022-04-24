import React from 'react'
import { Link } from 'react-router-dom';
import "./page.css"

function Home (){
  return (
    <>
        <div className='Container01'>
          <div className='HomePageHeader'>
            <h2>อัพเดตธีมการ์ดใหม่</h2>
            <div className='picContainer01'>
              <Link to="/dark-magician-archetype">
                <img src='./image/archetypebanner/Dark Magician Banner.png' alt=''/>
              </Link>
            </div>
            <h2>รอการอัพเดต</h2>
            <div className='pic_grid'>
              <Link to="/*">
                <img src='./image/archetypebanner/Wait Banner.png' alt=''/>
              </Link>
              <Link to="/*">
                <img src='./image/archetypebanner/Wait Banner.png' alt=''/>
              </Link>
              <Link to="/*">
                <img src='./image/archetypebanner/Wait Banner.png' alt=''/>
              </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home