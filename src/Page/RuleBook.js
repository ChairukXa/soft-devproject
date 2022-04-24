import React from 'react'
import "./page.css"
import { Link, Redirect, Route, Switch } from 'react-router-dom';

function RuleBook() {
  return (
    <div className='Field'>
        <h1>Welcome To RuleBook Page</h1>
        <p className='MenuLink'>
          <Link to="/ruleBook/about_the_game"><li>เกี่ยวกับยูกิโอเบื้องต้น</li></Link>
          <Link to="/ruleBook/getting_started"><li>สิ่งที่ต้องมีในการเล่น</li></Link>
          <Link to="/ruleBook/game_cards"><li>เกี่ยวกับการ์ด</li></Link>
          <Link to="/ruleBook/how_to_play"><li>วิธีการเล่น</li></Link>
          <Link to="/ruleBook/battles_and_chains"><li>แบทเทิลและการเชน</li></Link>
          <Link to="/ruleBook/other_rule"><li>รูลลิ่งอื่นๆ</li></Link>
        </p>
        <Switch>
          <Route path="/ruleBook/about_the_game">
            <div className='dialog01'>
            สำหรับเกมการ์ด Yu-Gi-Oh! นั้นเป็นบอร์ดเกมแนวแอคชั่นการ์ดที่จะทำให้เราสนุกไปกับเพื่อนๆและคนในครอบครัวของเรา เหมือนกับในอนิเมะซีรี่ย์ Yu-Gi-Oh!
            </div>
            <div className='dialog02'>
            สำหรับจำนวนผู้เล่นที่ใช้ในการเล่นเกมนี้นั้นจำเป็นต้องใช้ผู้เล่น 2 คน โดยจะแบ่งผู้เล่นออกเป็น 2 ฝ่าย โดยแต่ละฝ่ายจะมีไลฟ์พอยด์เริ่มต้นที่ 8000 
            และ ผู้เล่นจะมีสิ่งที่เรียกว่าเด็ค โดย ภายในจะประกอบไปด้วย<br/>การ์ดมอนสเตอร์ การ์ดเวทมนตร์ และ การ์ดกับดัก รวมกันขั้นต่ำอย่างน้อย 40 ใบ 
            และมากสุดไม่เกิน 60 ใบ ผู้เล่นทั้งสองฝ่ายจะต้องใช้เด็คของตัวเอง ในการเอาชนะผู้เล่นอีกฝ่าย โดยที่หากฝ่ายใดสามารถทำให้<br/>ไลฟ์พอยด์ของฝ่ายตรงข้ามเหลือ 0 ได้ก่อน 
            ผู้เล่นคนนั้นก็จะเป็นฝ่ายชนะ
            </div>
          </Route>
          <Route path="/ruleBook/getting_started">
          </Route>
          <Route path="/ruleBook/game_cards">
          </Route>
          <Route path="/ruleBook/how_to_play">
          </Route>
          <Route path="/ruleBook/battles_and_chains">
          </Route>
          <Route path="/ruleBook/other_rule">
          </Route>
          <Route path="/ruleBook">
            <Redirect to="/ruleBook/about_the_game"/>
          </Route>
        </Switch>
    </div>
  )
}

export default RuleBook