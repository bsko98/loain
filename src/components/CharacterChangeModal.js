import React, { useState } from "react";
import "./CharacterChangeModal.css";
import CharacterInfoComponent from "./characterInfoComponent";


const CharacterChangeModal = ({ isOpen, onClose, characterList = [], onSelectCharacter, selectedCharacter }) => {
    const [filteredCharacters, setFilteredCharacters] = useState(characterList);
    const [activeServer, setActiveServer] = useState(null);

    if (!isOpen) return null;

    // 서버 필터링 함수
    const filterByServer = (server) => {
        setFilteredCharacters(characterList.filter((char) => char.server === server));
            setActiveServer(server);
    };

    

    return (
        <div className="character-change-modal-overlay">
            <div className="character-change-modal-content">
                <div className="character-change-modal-header">
                    <h2>내 캐릭터</h2>
                    <button className="character-change-modal-close-btn" onClick={onClose}>X</button>
                </div>
                <div className="character-change-server-list">
                    {["루페온", "실리안", "카마인", "아브렐슈드", "아만", "카제로스", "카단", "니나브"].map((server, index) => (
                        <button 
                            key={index} 
                            className={`character-change-server-button ${activeServer === server ? "active" : ""}`} 
                            onClick={() => filterByServer(server)}
                        >
                            {server}
                        </button>
                    ))}
                </div>
                <div class="my-character-info-box">
                    {filteredCharacters.length > 0 ? (
                        filteredCharacters.map((character) => (
                            <CharacterInfoComponent key={character.name} characterPhoto={character.image} characterName={character.name} onclick={()=>onSelectCharacter(character)}
                            serverName={character.server} classInfo={character.job} itemLevel={character.itemlevel} selectedCharacter={selectedCharacter} characterId = {character.id}
                            comp={selectedCharacter?.id === character.id && (
                                    <span className="character-change-selected-label">선택됨</span>
                                )}/>
                        ))
                    ) : (
                        <div className="no-character" ><p>해당 서버에 캐릭터가 없습니다.</p></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CharacterChangeModal;

