import React from 'react'
import "./MonsterCarddetail.css"

function MonsterCarddetail(props){
  const { DataInCard } = props;
  return (
    <div className='Wallpaler'>
        <div className='Cardart'>
            <img src={ DataInCard.ImageCard } alt=''/>
        </div>
        <div className='Carddetail'>
          <div className='En_Carddetail'>
            <h1 className='En_namecard'>{ DataInCard.EnNameCard }</h1>
            <h3 className='En_attribute_type_typecard'>{ DataInCard.EnAttributeTypeTypecard }</h3>
            <h3 className='En_level_atk_def'>{ DataInCard.EnLevelAtkDef }</h3>
            <h3 className='En_ReleaseIn_StatusCard'>{ DataInCard.EnReleaseIn }</h3>
            <h3 className='En_ReleaseIn_StatusCard'>{ DataInCard.EnStatusCard }</h3>
            <h4 >Effect:</h4>
            <div className='En_textcard'>{ DataInCard.EnTextCard }</div>
          </div>
          <div className='Th_Carddetail'>
            <h1 className='Th_namecard'>{ DataInCard.ThNameCard }</h1>
            <h3 className='Th_attribute_type_typecard'>{ DataInCard.ThAttributeTypeTypecard }</h3>
            <h3 className='Th_level_atk_def'>{ DataInCard.ThLevelAtkDef }</h3>
            <h3 className='Th_ReleaseIn_StatusCard'>{ DataInCard.ThReleaseIn }</h3>
            <h3 className='Th_ReleaseIn_StatusCard'>{ DataInCard.ThStatusCard }</h3>
            <h4 >Effect:</h4>
            <div className='Th_textcard'>{ DataInCard.ThTextCard }</div>
          </div>
            
        </div>
    </div>
  )
}

export default MonsterCarddetail