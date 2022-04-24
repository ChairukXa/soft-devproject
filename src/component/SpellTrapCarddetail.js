import React from 'react'
import "./MonsterCarddetail.css"

function SpellTrapCarddetail(props){
    const { DataInCard } = props;
    return (
      <div className='Wallpaler'>
          <div className='Cardart'>
              <img src={ DataInCard.ImageCard } alt=''/>
          </div>
          <div className='Carddetail'>
            <div className='En_Carddetail'>
                <h1 className='En_namecard'>{ DataInCard.EnNameCard }</h1>
                <h3 className='En_typecard'>{ DataInCard.EnTypeCard }</h3>
                <h3 className='En_ReleaseIn_StatusCard'>{ DataInCard.EnReleaseIn }</h3>
                <h3 className='En_ReleaseIn_StatusCard'>{ DataInCard.EnStatusCard }</h3>
                <h4 >Effect:</h4>
                <div className='En_textcard'>
                  { DataInCard.EnTextCard }
                </div>
            </div>
            <div className='Th_Carddetail'>
                <h1 className='Th_namecard'>{ DataInCard.ThNameCard }</h1>
                <h3 className='Th_typecard'>{ DataInCard.ThTypeCard }</h3>
                <h3 className='Th_ReleaseIn_StatusCard'>{ DataInCard.ThReleaseIn }</h3>
                <h3 className='Th_ReleaseIn_StatusCard'>{ DataInCard.ThStatusCard }</h3>
                <h4 >เอฟเฟค:</h4>
                <div className='Th_textcard'>
                    { DataInCard.ThTextCard }
                </div>
            </div>
              
          </div>
      </div>
    )
  }
  
  export default SpellTrapCarddetail