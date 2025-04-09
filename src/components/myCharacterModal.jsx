import React, { useState } from "react";
import './myCharacterModal.css';
import CharacterInfoComponent from './characterInfoComponent';
import './CharacterChangeModal.css';
import CharacterAddModal from './CharacterAddModal';
import CertificationModal from './CertificationModal';
import { ReactComponent as AddButton } from '../assets/images/addButton.svg';

const MyCharacterModal = () => {
  const [isCharacterAddOpen, setCharacterAddOpen] = useState(false);
  const [isPostCertificationOpen, setPostCertificationOpen] = useState(false);

  const openCharacterAddModal = () => setCharacterAddOpen(true);
  const closeCharacterAddModal = () => setCharacterAddOpen(false);

  const openPostCertificationModal = () => setPostCertificationOpen(true);
  const closePostCertificationModal = () => setPostCertificationOpen(false);

  const handleConfirmCharacterNickname = (nickname) => {
    console.log("입력된 닉네임:", nickname);
    closeCharacterAddModal();
    openPostCertificationModal();
  };

  const handleConfirmGemName = (gemName) => {
    console.log("입력된 보석 이름:", gemName);
    closePostCertificationModal();
  };

  const servers = [
    { id: '1', serverName: '루페온' },
    { id: '2', serverName: '실리안' },
    { id: '3', serverName: '아만' },
    { id: '4', serverName: '카마인' },
    { id: '5', serverName: '카제로스' },
    { id: '6', serverName: '아브렐슈드' },
    { id: '7', serverName: '카단' },
    { id: '8', serverName: '니나브' }
  ];

  const characters = [
    { id: '1', characterPhoto: 'img1.jpg', characterName: '쌀먹은늘좋아', serverName: '아만', classInfo: '홀리나이트', itemLevel: '1640' },
    { id: '2', characterPhoto: 'img2.jpg', characterName: 'ExPieceMaker', serverName: '카마인', classInfo: '건슬링어', itemLevel: '1611.67' },
    { id: '3', characterPhoto: 'img3.jpg', characterName: '사각나무방패', serverName: '카마인', classInfo: '워로드', itemLevel: '1592.50' },
  ];

  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [activeServer, setActiveServer] = useState(null);

  const filterByServer = (server) => {
    setFilteredCharacters(characters.filter((char) => char.serverName === server));
    setActiveServer(server);
  };

  return (
    <div className='my-character-container'>
      <div className='my-character-add-button-row'>
        내 캐릭터
        <button className='add-character-buuton' onClick={openCharacterAddModal}>
          <AddButton style={{ marginTop: '4px' }} />
          <div style={{ width: '49px', height: '17px', fontSize: '11px', marginLeft: '4px', paddingTop: '4.5px' }}>
            추가하기
          </div>
        </button>
      </div>

      <div className='my-character-server-box'>
        {servers.map(server => (
          <button key={server.id}
            className={`character-change-server-button ${activeServer === server.serverName ? "active" : ""}`}
            onClick={() => filterByServer(server.serverName)}
          >
            {server.serverName}
          </button>
        ))}
      </div>

      <div className='my-character-info-box'>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map(character => (
            <CharacterInfoComponent
              key={character.characterName}
              characterPhoto={character.characterPhoto}
              characterName={character.characterName}
              serverName={character.serverName}
              classInfo={character.classInfo}
              itemLevel={character.itemLevel}
              characterId={character.id}
              comp={
                <div
                  onClick={() => console.log(character.characterName)}
                  style={{
                    width: '60px',
                    height: '21px',
                    borderRadius: '8px',
                    backgroundColor: '#D28506',
                    color: 'white',
                    paddingTop: '4px',
                    fontSize: '14px'
                  }}
                >
                  정보 갱신
                </div>
              }
            />
          ))
        ) : (
          <div className="no-character"><p>해당 서버에 캐릭터가 없습니다.</p></div>
        )}
      </div>

      {/* 모달 */}
      <CharacterAddModal
        isOpen={isCharacterAddOpen}
        onClose={closeCharacterAddModal}
        onConfirm={handleConfirmCharacterNickname}
      />
      <CertificationModal
        isOpen={isPostCertificationOpen}
        onClose={closePostCertificationModal}
        onConfirm={handleConfirmGemName}
      />
    </div>
  );
};

export default MyCharacterModal;