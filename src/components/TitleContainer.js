import React , {useState} from 'react';
import './CardTitleContainer.css';

const TitleContainer = ({listTitle, listData}) => {
  return (
    <div className='cardTitle-Container'>
        <div className='listTitle'>{listTitle}</div>
        <div className='list-Container'>
          {listData.map((data, index) => (
            <div key={index} className='list'>
              <div className='contentTitle'>{data.titleName}</div>
              <div className='content'>{data.titleContent}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TitleContainer