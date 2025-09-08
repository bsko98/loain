import React from 'react';
import './CardTitleContainer.css';

const getAwakenAndEffectSum = cardValue => {
  if (cardValue >= 30) return { displayAwaken: 30, effectSum: 15 };
  if (cardValue >= 24) return { displayAwaken: 24, effectSum: 11 };
  if (cardValue >= 18) return { displayAwaken: 18, effectSum: 7 };
  return { displayAwaken: 0, effectSum: 0 };
};

const CardContainer = ({ state }) => {
  return (
    <div className="cardtitle-container">
      <div className="list-title">가지고 있는 카드</div>
      <div className="list-container">
        {state.myData.userData.chooseCharacter &&
        state.myData.userData.chooseCharacter.cards.length > 0 ? (
          state.myData.userData.chooseCharacter.cards.map((data, index) => {
            const { displayAwaken, effectSum } = getAwakenAndEffectSum(
              data.awakening
            );
            return (
              <div key={index} className="list">
                <div className="content-title">
                  {data.name} ({displayAwaken}각)
                </div>
                <div className="content">
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
