import React from 'react'
import SpellTrapCarddetail from '../component/SpellTrapCarddetail'
import '../component/Field.css'
import { Link, Redirect, Route, Switch } from 'react-router-dom';

const DataInCards = {
  ImageCard:"../image/card/DM/DarkMagicalCircle.png",
  EnNameCard:"Dark Magical Circle",
  EnTypeCard:"Spell Type: Continuous Spell",
  EnReleaseIn:"Release In: 2016-04-09 in The Dark Illusion",
  EnStatusCard:" Status Card: Unlimit",
  EnTextCard:"You can only use each effect of 'Dark Magical Circle' once per turn. (1) When this card is activated: Look at the top 3 cards of your Deck, then you can reveal 1 of them that is 'Dark Magician' or a Spell/Trap that mentions 'Dark Magician', and add it to your hand, also place the remaining cards on top of your Deck in any order. (2) If 'Dark Magician' is Normal or Special Summoned to your field (except during the Damage Step): You can target 1 card your opponent controls; banish it.",
  ThNameCard:"วงเวทย์มนตร์ดำ",
  ThTypeCard:"ประเภทเวทมนตร์: เวทมนตร์ ต่อเนื่อง",
  ThReleaseIn:"จำหน่ายครั้งแรก: 9 เมษายน ค.ศ 2016 ใน The Dark Illusion",
  ThStatusCard:"สถานะของการ์ด: ใส่ได้ 3 ใบ",
  ThTextCard:"เราสามารถสั่งใช้งานเอฟเฟคแต่ละอย่างของการ์ดชื่อนี้ได้เพียงเทิร์นละครั้ง. (1) เมื่อการ์ดใบนี้ถูกสั่งใช้งาน: เปิดดูการ์ด 3 ใบ บนสุดของเด็คของเรา, จากนั้นแสดงการ์ด 'Dark Magician' หรือ การ์ดเวทมนตร์/กับดักที่มี 'Dark Magician' ระบุไว้ในเท็คของการ์ดจากที่เปิดเจอ 1 ใบ, และนำการ์ดที่แสดงนั้นขึ้นมือ, จากนั้นนำการ์ดที่เหลือจากที่เปิดเจอไปวางเรียงไว้บนสุดของเด็คของเราตามลำดับ. (2) ถ้า 'Dark Magician' อัญเชิญแบบปกติ หรือ อัญเชิญแบบพิเศษ ลงบนสนามของเรา (ยกเว้นในช่วงคำนวณความเสียหาย): เราสามารถเลือกการ์ดที่อีกฝ่ายควบคุม 1 ใบ; นำการ์ดที่เลือกออกจากเกม"
};

function Dark_Magical_Circle (){
  return (
    <div className='Field'>
        <h1>Dark Magical Circle</h1>
        <p className='MenuLink'>
          <Link to="/dark_magical_circle/cardDetail"><li>Card Detail</li></Link>
          <Link to="/dark_magical_circle/gallery"><li>Gallery</li></Link>
          <Link to="/dark_magical_circle/comment"><li>Comment</li></Link>
        </p>
        <Switch>
          <Route path="/dark_magical_circle/cardDetail">
            <SpellTrapCarddetail DataInCard={DataInCards}/>
          </Route>
          <Route path="/dark_magical_circle/gallery">
          <div className='Gallery'>
              <div className='galleryGrid'>
                <img src='../image/card/DM/DarkMagicalCircle.png' alt=''/>
              </div>
            </div>
          </Route>
          <Route path="/dark_magical_circle/comment">
            <h2>แสดงความคิดเห็น</h2>
          </Route>
          <Route path="/dark_magical_circle">
          <Redirect to="/dark_magical_circle/cardDetail"/>
            <Redirect to="/dark_magical_circle/gallery"/>
            <Redirect to="/dark_magical_circle/comment"/>
          </Route>
        </Switch>
    </div>
  )
}

export default Dark_Magical_Circle

