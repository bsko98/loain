import React, { useState } from "react";
import "./CharacterSelectContainer.css";
import CharacterChangeModal from "./CharacterChangeModal";
import CharacterSelectIcon from "../assets/images/CharacterSelectIcon.svg";

const CharacterSelectContainer = ({ selectedCharacter, setSelectedCharacter }) => {
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const characterList = [
        { id: 1, name: "하트소서", server: "아만", job: "소서리스", itemlevel: 1720, image: "/img1.png" },
        { id: 2, name: "test카마인", server: "카마인", job: "버서커", itemlevel: 1700, image: "/img1.png" },
        { id: 3, name: "test아브", server: "아브렐슈드", job: "홀리나이트", itemlevel: 1650, image: "/img1.png" },
    ];

    const handleRefresh = async () => {
        setLoading(true);
        try {
            setSelectedCharacter(characterList[0]); // 첫 번째 캐릭터를 기본 선택
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
                        <span className="character-name">#{selectedCharacter.name}</span>
                        <span className="character-details"> / {selectedCharacter.server} / {selectedCharacter.job} / {selectedCharacter.itemlevel}</span>
                    </>
                ) : (
                    "#캐릭터 닉네임 / 선택한 캐릭터가 없습니다."
                )}
            </span>

            <div className="character-select-button-group">
                <button className="character-select-btn refresh" onClick={handleRefresh} disabled={loading}>
                    {loading ? "갱신 중..." : "정보 갱신"}
                </button>

                <button className="character-select-btn change" onClick={() => setIsModalOpen(true)}>
                    <img src={CharacterSelectIcon} alt="캐릭터 변경" className="character-select-icon" />
                    캐릭터 변경
                </button>
            </div>

            {isModalOpen && (
                <CharacterChangeModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    characterList={characterList}
                    onSelectCharacter={(char) => {
                        setSelectedCharacter(char);
                        setIsModalOpen(false); // 모달 닫기
                    }}
                    selectedCharacter={selectedCharacter}
                />
            )}
        </div>
    );
};

export default CharacterSelectContainer;
