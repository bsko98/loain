import React, { useState } from "react";
import "./CharacterSelectContainer.css";
import CharacterChangeModal from "./CharacterChangeModal";
import CharacterSelectIcon from "../assets/images/CharacterSelectIcon.svg";


const selectCharacter = (myData, character) => {
  myData.userData.chooseCharacter = character;
  return {
    ...myData
  };
}


const CharacterSelectContainer = ({ 
    state
  }) => {
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleRefresh = async () => {
      setLoading(true);
      try {
        // state.myData.characters[0] 수정해야 함
        state.setMyData(selectCharacter(state.myData, state.myData.characters[0]));
      } catch (error) {
        alert("네트워크 오류가 발생했습니다.");
        console.error(error);
      }
      setLoading(false);
    };
    return (
      <div className="character-select-container">
        <span className="character-info">
          {state.myData.userData.chooseCharacter ? (
            <>
              <span className="character-name">{state.myData.userData.chooseCharacter.name}</span>
            </>
          ) : (
            "캐릭터 닉네임 / 선택한 캐릭터가 없습니다."
          )}
        </span>
  
        <div className="character-select-button-group">
          <button className="character-select-btn refresh" onClick={handleRefresh} disabled={loading}>
            {loading ? "갱신 중..." : "정보 갱신"}
          </button>
          <button className="character-select-btn change" onClick={() => setIsModalOpen(true)}>
          <img src={CharacterSelectIcon} alt="캐릭터 변경" className="character-select-icon" />
            캐릭터 선택
          </button>
        </div>
  
        {isModalOpen && (
          <CharacterChangeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            characterList={state.myData.characters}
            onSelectCharacter={(char) => state.setMyData(selectCharacter(state.myData, char))}
            selectedCharacter={state.myData.userData.chooseCharacter}
          />
        )}
      </div>
    );
  };
  
  export default CharacterSelectContainer;
  