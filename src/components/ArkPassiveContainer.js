import React from 'react';
import './ArkPassiveContainer.css';

const ArkPassiveContainer = ({ evolution, realization, leap }) => {
  const formatValue = (value) => {
    return value ? `# ${value}` : '';
  };

  return (
    <div className="arkpassive">
      <div className="arkpassive-box">
        <div className="arkpassive-label">진화</div>
        <div className="arkpassive-value">{formatValue(evolution)}</div>
      </div>
      <div className="arkpassive-box">
        <div className="arkpassive-label">깨달음</div>
        <div className="arkpassive-value">{formatValue(realization)}</div>
      </div>
      <div className="arkpassive-box last">
        <div className="arkpassive-label">도약</div>
        <div className="arkpassive-value">{formatValue(leap)}</div>
      </div>
    </div>
  );
};

export default ArkPassiveContainer;
