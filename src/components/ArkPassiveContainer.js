import React from 'react';
import './ArkPassiveContainer.css';

const ArkPassiveContainer = ({ state }) => {
  const formatValue = (value) => {
    return value ? `${value}` : '';
  };
  return (
    <div className="arkpassive">
      <div className="arkpassive-box">
        <div className="arkpassive-label">진화</div>
        <div className="arkpassive-value">{formatValue(
          state.myData.userData.chooseCharacter?state.myData.userData.chooseCharacter.arkPassive.evolution:0
          )}</div>
      </div>
      <div className="arkpassive-box">
        <div className="arkpassive-label">깨달음</div>
        <div className="arkpassive-value">{formatValue(
          state.myData.userData.chooseCharacter?state.myData.userData.chooseCharacter.arkPassive.enlightenment:0
          )}</div>
      </div>
      <div className="arkpassive-box last">
        <div className="arkpassive-label">도약</div>
        <div className="arkpassive-value">{formatValue(
          state.myData.userData.chooseCharacter?state.myData.userData.chooseCharacter.arkPassive.leap:0
          )}</div>
      </div>
    </div>
  );
};

export default ArkPassiveContainer;
