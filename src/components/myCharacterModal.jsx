import React, { useState } from "react";
import './myCharacterModal.css'
import CharacterInfoComponent from './characterInfoComponent'
import './CharacterChangeModal.css'
import { ReactComponent as AddButton} from '../assets/images/addButton.svg'
import LoainAuthModal from "./LoainAuthModal";


//TODO - 정보 갱신 누를시 어떤 이벤트가 작동하는지 확인해봐야될듯
const MyCharacterModal = () => {

  const servers = [
    {id:'1', serverName: '루페온'},
    {id:'2', serverName: '실리안'},
    {id:'3', serverName:  '아만'},
    {id:'4', serverName:  '카마인'},
    {id:'5', serverName:  '카제로스'},
    {id:'6', serverName:  '아브렐슈드'},
    {id:'7', serverName:  '카단'},
    {id:'8', serverName:  '니나브'}
  ]

  const characters = [
    {id: '1', characterPhoto:'https://img.lostark.co.kr/armory/5/B691AFAF7195DF0A3EBB77276B60431D2E1E6B00B5F5FF3059D5E05328947ADB.jpg?v=20250222021129', characterName: '쌀먹은늘좋아', serverName: '아만', classInfo:'홀리나이트', itemLevel:'1640'},
    {id: '2', characterPhoto:'https://img.lostark.co.kr/armory/1/2E0BEF5C20BDCDFE9B367B9D45CB6C363106C7E67C569440AC6C0A9A23603E9D.jpg?v=20250216171712', characterName: 'ExPieceMaker', serverName: '카마인', classInfo:'건슬링어', itemLevel:'1,611.67'},
    {id: '3', characterPhoto:'https://img.lostark.co.kr/armory/3/ADCEB258EB5A436F8E1E3B0F852441B0A85753ABE72E9D29D88C610F885A1120.jpg?v=20250204191040', characterName: '사각나무방패', serverName: '카마인', classInfo:'워로드', itemLevel:'1,592.50'},
  ]  

  const [isLoainAuthModalOpen,setIsLoainAuthModalOpen] = useState(false);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [activeServer, setActiveServer] = useState(null);
  
  // 서버 필터링 함수
  const filterByServer = (server) => {
      setFilteredCharacters(characters.filter((char) => char.serverName === server));
      setActiveServer(server);
  };



  return (
    <div className='my-character-container'>
      <div className='my-character-add-button-row'>
          <span className="my-character-tittle">내 캐릭터</span>
          <button className='add-character-button' onClick={()=>setIsLoainAuthModalOpen(!isLoainAuthModalOpen)}>
              <AddButton/>
              <span className='add-character-button-text'>
                  추가하기
              </span>
          </button>
      </div>
      <div className='my-character-server-box'>
          {servers.map(server => (<button key={server.id} className={`character-change-server-button ${activeServer === server.serverName ? "active" : ""}`}  onClick={()=>filterByServer(server.serverName)}>{server.serverName}</button>))}
      </div>
      <div className='my-character-info-box'>
      {filteredCharacters.length > 0 ?
        (filteredCharacters.map(character=>( 
          <CharacterInfoComponent key={character.characterName} characterPhoto={character.characterPhoto} characterName={character.characterName} 
          serverName={character.serverName} classInfo={character.classInfo} itemLevel={character.itemLevel} characterId={character.id}
          comp={<div onClick={()=>console.log(character.characterName)} style={{width:'60px', height:'21px', borderRadius:'8px', backgroundColor:'#D28506',color:'white' ,paddingTop:'4px', fontSize:'14px'}}>정보 갱신</div>}/>)))
          :(
            <div className="no-character"><p>해당 서버에 캐릭터가 없습니다.</p></div>
        )}
      </div>
      <LoainAuthModal isOpen={isLoainAuthModalOpen} onClose={()=>setIsLoainAuthModalOpen(!isLoainAuthModalOpen)}/>
  </div>
  )
}

export default MyCharacterModal