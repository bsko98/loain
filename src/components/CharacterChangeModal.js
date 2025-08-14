import React, { useState, useEffect, useRef } from "react"; 
import "./CharacterChangeModal.css";
import CharacterInfoComponent from "./characterInfoComponent";
import { ReactComponent as CloseButton} from "../assets/images/CloseButton.svg";


const CharacterChangeModal = ({ 
        isOpen, 
        onClose, 
        characterList = [], 
        onSelectCharacter, 
        selectedCharacter 
    }) => {
    const [filteredCharacters, setFilteredCharacters] = useState(characterList);
    const [activeServer, setActiveServer] = useState(null);
    const modalRef = useRef(null);

    

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const filterByServer = (server) => {
        setFilteredCharacters(characterList.filter((char) => char.serverName === server));
        setActiveServer(server);
    };

    return (
        <div className="character-change-modal-overlay">
            <div className="character-change-modal-content" ref={modalRef}>
                <div className="character-change-modal-header">
                    <h2>내 캐릭터</h2>
                    <button className="character-change-modal-close-btn" onClick={onClose}><CloseButton/></button>
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
                <div className="my-character-info-box">
                    {filteredCharacters.length > 0 ? (
                        filteredCharacters.map((character) => {
                            return (
                            <CharacterInfoComponent 
                                key={character.name} 
                                characterPhoto={character.imageUrl} 
                                characterName={character.name} 
                                serverName={character.serverName} 
                                classInfo={character.job} 
                                itemLevel={character.itemlevel} 
                                selectedCharacter={selectedCharacter} 
                                characterId = {character.characterId}
                                onclick={()=>onSelectCharacter(character.characterId)}
                                comp={selectedCharacter?.characterId === character.characterId && (
                                    <span className="character-change-selected-label">선택됨</span>
                                )}/>
                        )})
                    ) : (
                        <div className="no-character" ><p>해당 서버에 캐릭터가 없습니다.</p></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CharacterChangeModal;

