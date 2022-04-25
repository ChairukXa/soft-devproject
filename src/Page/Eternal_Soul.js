import React from 'react'
import SpellTrapCarddetail from '../component/SpellTrapCarddetail'
import '../component/Field.css'
import '../component/GalleryGrids.css'
import { Link, Redirect, Route, Switch } from 'react-router-dom';

const DataInCards = {
  ImageCard:"../image/card/DM/EternalSoul.png",
  EnNameCard:"Eternal Soul",
  EnTypeCard:"Trap Type: Continuous Trap",
  EnReleaseIn:"Release In: 2015-01-10 in Duelist Road -Piece of Memory- Side: Yami Yugi",
  EnStatusCard:" Status Card: Unlimit",
  EnTextCard:"(1) Every 'Dark Magician' in your Monster Zone is unaffected by your opponent's card effects. (2) If this face-up card leaves the field: Destroy all monsters you control. You can only use the following effect of 'Eternal Soul' once per turn. You can activate 1 of these effects; ● Special Summon 1 'Dark Magician' from your hand or GY. ● Add 1 'Dark Magic Attack' or 'Thousand Knives' from your Deck to your hand.",
  ThNameCard:"ศิลาวิญญาณนิรันดร์",
  ThTypeCard:"ประเภทกับดัก: กับดัก ต่อเนื่อง",
  ThReleaseIn:"จำหน่ายครั้งแรก: 10 มกราคม ค.ศ 2015 ใน Duelist Road -Piece of Memory- Side: Yami Yugi",
  ThStatusCard:"สถานะของการ์ด: ใส่ได้ 3 ใบ",
  ThTextCard:"เราสามารถสั่งใช้งานเอฟเฟคที่ (3) ของการ์ดชื่อนี้ได้เทิร์นละครั้ง. (1) 'Dark Magician' ในมอนสเตอร์โซนของเราจะไม่รับผลจากเอฟเฟคการ์ดของอีกฝ่าย. (2) ถ้าการ์ดใบนี้ที่หงายหน้าอยู่ถูกนำออกจากสนาม: ทำลายมอนสเตอร์ทั้งหมดที่เราควบคุม.(3) เราสามารถสั่งใช้งานเอฟเฟค 1 อย่างจากรายการต่อไปนี้; ● อัญเชิญแบบพิเศษ 'Dark Magician' จากบนมือหรือสุสานของเรา 1 ใบ ลงบนสนามของเรา. ● นำการ์ด 'Dark Magic Attack' หรือ 'Thousand Knives' จากเด็คของเรา 1 ใบ ขึ้นมือ."
};

function Eternal_Soul (){
  return (
    <div className='Field'>
        <h1>Dark Magical Circle</h1>
        <p className='MenuLink'>
          <Link to="/eternal_soul/cardDetail"><li>Card Detail</li></Link>
          <Link to="/eternal_soul/gallery"><li>Gallery</li></Link>
        </p>
        <Switch>
          <Route path="/eternal_soul/cardDetail">
            <SpellTrapCarddetail DataInCard={DataInCards}/>
          </Route>
          <Route path="/eternal_soul/gallery">
          <div className='Gallery'>
              <div className='galleryGrid'>
                <img src='../image/card/DM/EternalSoul.png' alt=''/>
              </div>
            </div>
          </Route>
          <Route path="/eternal_soul">
          <Redirect to="/eternal_soul/cardDetail"/>
            <Redirect to="/eternal_soul/gallery"/>
          </Route>
        </Switch>
    </div>
  )
}

export default Eternal_Soul