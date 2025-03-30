import React from 'react';
import './CardTitleContainer.css';

const CardContainer = ({ listTitle, listData }) => {
  return (
    <div className='cardTitle-Container'>
      <div className='listTitle'>{listTitle}</div>
      <div className='list-Container'>
        {listData.map((data, index) => (
          <div key={index} className='list'>
            <div className='contentTitle'>{data.Name}({data.AwakenSum}각)</div>
            <div className='content'>{data.EffectType}속성 피해 + {data.EffectSum}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardContainer