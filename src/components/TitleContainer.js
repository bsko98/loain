import React from 'react';
import './CardTitleContainer.css';

const TitleContainer = ({ state }) => {
  return (
    <div className="cardtitle-container">
      <div className="list-title">가지고 있는 칭호</div>
      <div className="list-container">
        {state.myData.userData.chooseCharacter &&
        state.myData.userData.chooseCharacter.titles.length > 0 ? (
          state.myData.userData.chooseCharacter.titles.map((data, index) => {
            return (
              <div key={index} className="list">
                <div className="content-title">{data}</div>
                <div className="content">{data}</div>
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

export default TitleContainer;
