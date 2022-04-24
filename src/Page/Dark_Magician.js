import React from 'react'
import MonsterCarddetail from '../component/MonsterCarddetail'
import '../component/Field.css'
import '../component/GalleryGrids.css'
import { Link, Redirect, Route, Switch } from 'react-router-dom';

const DataInCards = {
  ImageCard:"../image/card/DM/DarkMagician01.jpg",
  EnNameCard:"Dark Magician",
  EnAttributeTypeTypecard:"Attribute: DARK / Type: Spellcaster / Normal Monster",
  EnLevelAtkDef:"Level: 7 / Atk: 2500 / Def: 2100",
  EnReleaseIn:"Release In: 1999-02-04 in Vol.1",
  EnStatusCard:" Status Card: Unlimit",
  EnTextCard:"The ultimate wizard in terms of attack and defense.",
  ThNameCard:"แบล็คเมจิคเชี่ยน",
  ThAttributeTypeTypecard:"ธาตุ: มืด / เผ่า: จอมเวทย์ / มอนสเตอร์ ปกติ",
  ThLevelAtkDef:"เลเวล: 7 / พลังโจมตี: 2500 / พลังป้องกัน: 2100",
  ThReleaseIn:"จำหน่ายครั้งแรก: 4 กุมภาพันธ์ ค.ศ 1999 ใน Vol.1",
  ThStatusCard:"สถานะของการ์ด: ใส่ได้ 3 ใบ",
  ThTextCard:"สุดยอดจอมเวทมนตร์ดำที่เก่งกาจทั้งการโจมตีและป้องกัน"
};
function Dark_Magician (){
  return (
    <div className='Field'>
        <h1>Dark Magician</h1>
        <p className='MenuLink'>
          <Link to="/darkmagician/cardDetail"><li>Card Detail</li></Link>
          <Link to="/darkmagician/gallery"><li>Gallery</li></Link>
          <Link to="/darkmagician/comment"><li>Comment</li></Link>
        </p>
        <Switch>
          <Route path="/darkmagician/cardDetail">
            <MonsterCarddetail DataInCard={DataInCards}/>
          </Route>
          <Route path="/darkmagician/gallery">
            <div className='Gallery'>
              <div className='galleryGrid'>
                <img src='/image/card/DM/DarkMagician01.jpg' alt=''/>
                <img src='/image/card/DM/DarkMagician02.jpg' alt=''/>
                <img src='/image/card/DM/DarkMagician03.jpg' alt=''/>
                <img src='/image/card/DM/DarkMagician04.jpg' alt=''/>
                <img src='/image/card/DM/DarkMagician05.jpg' alt=''/>
                <img src='/image/card/DM/DarkMagician06.jpg' alt=''/>
                <img src='/image/card/DM/DarkMagician07.jpg' alt=''/>
                <img src='/image/card/DM/DarkMagician08.jpg' alt=''/>
              </div>
            </div>
          </Route>
          <Route path="/darkmagician/comment">
            <h2>แสดงความคิดเห็น</h2>
          </Route>
          <Route path="/darkmagician">
          <Redirect to="/darkmagician/cardDetail"/>
            <Redirect to="/darkmagician/gallery"/>
            <Redirect to="/darkmagician/comment"/>
          </Route>
        </Switch>
    </div>
  )
}

export default Dark_Magician