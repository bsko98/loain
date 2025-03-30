import React from 'react';
import './CardTitleContainer.css';

const TitleContainer = ({ listTitle, listData }) => {
  return (
    <div className='cardtitle-container'>
      <div className='list-title'>{listTitle}</div>
      <div className='list-container'>
        {listData.map((data, index) => (
          <div key={index} className='list'>
            <div className='content-title'>{data.titleName}</div>
            <div className='content'>{data.titleContent}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleContainer