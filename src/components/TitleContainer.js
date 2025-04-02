import React from 'react';
import './CardTitleContainer.css';

const TitleContainer = ({ listTitle, listData }) => {
  return (
    <div className='cardtitle-container'>
      <div className='list-title'>{listTitle}</div>
      <div className='list-container'>
        
      {listData.length > 0 ? (
        listData.map((data, index) => {
          return (
            <div key={index} className='list'>
                  <div className='content-title'>{data.titleName}</div>
                  <div className='content'>{data.titleContent}</div>
            </div>
          );
        })
      ) : (
        <div className="no-title">보유한 칭호 정보가 없습니다.</div>
      )}
      </div>

    </div>
  );
};

export default TitleContainer

