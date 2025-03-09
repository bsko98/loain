import React, { useState } from "react";
import "./CharacterSelectContainer.css";
import CharacterSelectIcon from "../images/CharacterSelectIcon.svg";

const CharacterSelectContainer = () => {
    const [characterName, setCharacterName] = useState(null);
    const [loading, setLoading] = useState(false);
    const characterapi="";
    const handleRefresh = async () => {
        setLoading(true);
        setCharacterName("하트소서");
        //API 호출부분
        // try {
        // const response = await fetch(characterapi);
        // const data = await response.json();
        
        // if (response.ok) {
        //     setCharacterName(data.characterName || "알 수 없음");
        // } else {
        //     alert("캐릭터 정보를 가져오는 데 실패했습니다.");
        // }
        // } catch (error) {
        // alert("네트워크 오류가 발생했습니다.");
        // console.error(error);
        // }

        setLoading(false);
    };

    return (
        <div className="character-select-container">
        <span className="character-info">
            #{characterName || "캐릭터 닉네임"} / 선택한 캐릭터가 없습니다.
        </span>
        <div className="character-select-button-group">
            <button className="character-select-btn refresh" onClick={handleRefresh} disabled={loading}>
            {loading ? "갱신 중..." : "정보 갱신"}
            </button>
            <button className="character-select-btn change">
                <img src={CharacterSelectIcon} alt="캐릭터 변경" className="character-select-icon"/> 
                캐릭터 변경
            </button>
            <button className="character-select-btn select">
                <img src={CharacterSelectIcon} alt="캐릭터 선택" className="character-select-icon"/>
                캐릭터 선택
            </button>
        </div>
        </div>
    );
};

export default CharacterSelectContainer;
