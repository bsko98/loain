import React from "react";
import "./characterInfoDisplay.css";

const CharacterInfoDisplay = ({ selectedCharacter }) => {
  if (!selectedCharacter) {
    return (
      <div className="character-info-box empty">

      </div>
    );
  }

  return (
    <div className="character-info-box">
      <div className="character-info-left">
        <div className="character-info-row">
          <span className="info-label">서버</span>
          <span className="info-value">#{selectedCharacter.server}</span>
        </div>
        <div className="character-info-row">
          <span className="info-label">직 업</span>
          <span className="info-value">#{selectedCharacter.job}</span>
        </div>
        <div className="character-info-row">
          <span className="info-label">아이템</span>
          <span className="info-value">#{selectedCharacter.itemlevel}</span>
        </div>
      </div>
      <div className="character-image-box">
        <img
          src={selectedCharacter.image}
          alt="캐릭터 이미지"
          className="character-image"
        />
      </div>
    </div>
  );
};

export default CharacterInfoDisplay;
