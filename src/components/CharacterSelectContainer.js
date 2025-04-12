import React, { useState } from "react";
import "./CharacterSelectContainer.css";
import CharacterChangeModal from "./CharacterChangeModal";
import CharacterSelectIcon from "../assets/images/CharacterSelectIcon.svg";


                    


const CharacterSelectContainer = ({ setSelectedCharacter, characterList, selectedCharacter }) => {
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleRefresh = async () => {
      setLoading(true);
      try {
        setSelectedCharacter(characterList[0]); // 예시: 첫 번째 캐릭터를 선택
      } catch (error) {
        alert("네트워크 오류가 발생했습니다.");
        console.error(error);
      }
      setLoading(false);
    };
  
    return (
      <div className="character-select-container">
        <span className="character-info">
          {selectedCharacter ? (
            <>
              <span className="character-name">{selectedCharacter.name}</span>
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
            characterList={characterList}
            onSelectCharacter={(char) => setSelectedCharacter(char)}
            selectedCharacter={selectedCharacter}
          />
        )}
      </div>
    );
  };
  
  export default CharacterSelectContainer;
  