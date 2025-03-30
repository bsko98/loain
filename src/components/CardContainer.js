import React from 'react';
import './CardTitleContainer.css';

const CardContainer = ({ listTitle, listData }) => {
  return (
    <div className='cardtitle-container'>
      <div className='list-title'>{listTitle}</div>
      <div className='list-container'>
        {listData.map((data, index) => (
          <div key={index} className='list'>
            <div className='content-title'>{data.Name}({data.AwakenSum}각)</div>
            <div className='content'>{data.EffectType}속성 피해 + {data.EffectSum}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardContainer