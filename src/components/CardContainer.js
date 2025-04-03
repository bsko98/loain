import React from 'react';
import './CardTitleContainer.css';

const getAwakenAndEffectSum = (cardValue) => {
  if (cardValue >= 30) return { displayAwaken: 30, effectSum: 15 };
  if (cardValue >= 24) return { displayAwaken: 24, effectSum: 11 };
  if (cardValue >= 18) return { displayAwaken: 18, effectSum: 7 };
  return { displayAwaken: 0, effectSum: 0 };
};

const CardContainer = ({ listTitle, listData }) => {
  return (
    <div className='cardtitle-container'>
      <div className='list-title'>{listTitle}</div>
      <div className='list-container'>
        {listData.length > 0 ? (
          listData.map((data, index) => {
            const { displayAwaken, effectSum } = getAwakenAndEffectSum(data.cardvalue);
            return (
              <div key={index} className='list'>
                <div className='content-title'>
                  {data.cardname} ({displayAwaken}각)
                </div>
                <div className='content'>
                  {data.effecttype}속성 피해 + {effectSum}%
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-card">보유한 카드 정보가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
