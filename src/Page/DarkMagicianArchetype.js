import React from 'react'
import "./DarkMagicianArchetype.css"
import { Link ,Route, Switch } from 'react-router-dom'
import Dark_Magician from './Dark_Magician'
import Eternal_Soule from './Eternal_Soul'
import Dark_Magical_Circle from './Dark_Magical_Circle'
function DarkMagicianArchetype (){
  return (
    <div className='Fild'>
        <div className='ArchetypeHeader'>
            <h1>Dark Magician</h1>
        </div>
        <div className='title1'>
                <h2>ดีไซน์และการออกแบบ</h2>
        </div>
        <div className='Design'>
            <div>
                <div>
                    ถ้าหากเราสังเกตที่ตัวเอสมอนสเตอร์ของธีมอย่าง Dark Magician จะเห็นได้ว่าตัวการ์ดนั้นมีองค์ประกอบต่างๆมากจากการ์ดในธีมเช่น               
                </div>
                <li>
                    ชุดของที่ Dark Magician ใส่นั้นมีลักษณะที่มีส่วนโค้งสีแดงที่แวววาวและแหลมคมที่ตัดกับสีชุดที่มีสีมืดถึบ คล้ายกับมอนสเตอร์ภายในธีมอย่าง "Magician's Robe"
                </li>
                <li>
                    การ์ดเวทมนตร์และกับดักส่วนใหญ่ของ Dark Magician จะมี "Dark Magical Circle" เป็นพื้นหลังไม่ก็องค์ประกอบของการ์ด
                </li>
            </div>
            <img src='./image/articon/DMicon01.jpg' alt='Magician Navigation'/>
        </div>
        <div className='title2'>
                <h2>รูปแบบและแนวทางการเล่น</h2>
        </div>
        <div className='Playstyle'>
            <div>
                สำหรับแนวทางการเล่นของธีมเด็ค Dark Magician นั้น คือการใช้เอฟเฟคของ การ์ดเวทมนตร์ และ การ์ดกับดักต่างๆ ควบคู่ไปกับอัญเชิญ Dark Magician ที่เป็นเอสมอนสเตอร์ของธีม
                และ ใช้เอฟเฟคเหล่านั้นกำจัดการ์ดบนสนามของอีกฝ่าย เช่น การใช้เอฟเฟคของ Eternal Soul ในการอัญเชิญ Dark Magician จากมือ หรือ สุสาน ของเรา และเอฟเฟคของ Dark Magical Circle ที่ถ้าหากเราทำการอัญเชิญ Dark Magician เราสามารถนำการ์ดบนสนามของอีกฝ่ายออกจากเกมได้ 1 ใบ
                นอกจากนี้ยังมีมอนสเตอร์อื่นๆ ภายในธีมที่ความสามารถในการหา Dark Magician และ การ์ดเวทมนตร์กับดักที่ต้องการขึ้นมือได้อีกด้วย
            </div>
        </div>
        <div className='title3'>
                <h2>การที่เกี่ยวข้องกับ Dark Magician </h2>
        </div>
        <div className='List_Card'>
            <Link to="/darkmagician/cardDetail"><li>Dark Magician</li></Link>
            <Link to="/*"><li>Dark Magician Girl</li></Link>
            <Link to="/dark_magical_circle/cardDetail"><li>Dark Magical Circle</li></Link>
            <Link to="/*"><li>Dark Magic Attack</li></Link>
            <Link to="/eternal_soul/cardDetail"><li>Eternal Soul</li></Link>
            <Link to="/*"><li>Thousand Knives</li></Link>
            
        </div>
        <Switch>
            <Route path="/darkmagician"><Dark_Magician /></Route>
            <Route path="/eternal_soul"><Eternal_Soule /></Route>
            <Route path="/dark_magical_circle"><Dark_Magical_Circle /></Route>
        </Switch>
    </div>
    
  )
}

export default DarkMagicianArchetype