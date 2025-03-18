import React, { useState } from "react";
import './myCharacterModal.css'
import CharacterInfoComponent from './characterInfoComponent'
import './CharacterChangeModal.css'
import { ReactComponent as AddButton} from '../assets/images/addButton.svg'


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


  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [activeServer, setActiveServer] = useState(null);
  
  // 서버 필터링 함수
  const filterByServer = (server) => {
      if (activeServer === server) {
          setFilteredCharacters(characters);
          setActiveServer(null);
      } else {
          setFilteredCharacters(characters.filter((char) => char.serverName === server));
          setActiveServer(server);
      }
  };



  return (
    <div className='my-character-container'>
      <div className='my-character-add-button-row'>
          내 캐릭터
          <button className='add-character-buuton'>
              <AddButton style={{marginTop:'4px'}}/>
              <div style={{width:'49px', height:'17px', fontSize:'11px', marginLeft:'4px', paddingTop:'4.5px'}} onClick={()=>alert("캐릭터 추가 부분이 구현될거임")}>
                  추가하기
              </div>
          </button>
      </div>
      <div className='my-character-server-box'>
          {servers.map(server => (<button key={server.id} className='character-change-server-button' onClick={()=>filterByServer(server.serverName)}>{server.serverName}</button>))}
      </div>
      <div className='my-character-info-box'>
        {filteredCharacters.map(character=>( 
          <CharacterInfoComponent key={character.characterName} characterPhoto={character.characterPhoto} characterName={character.characterName} 
          serverName={character.serverName} classInfo={character.classInfo} itemLevel={character.itemLevel} characterId={character.id}
          refreshButton={<div onClick={()=>console.log(character.characterName)} style={{width:'60px', height:'21px', borderRadius:'8px', backgroundColor:'#D28506',color:'white' ,paddingTop:'4px', fontSize:'14px'}}>정보 갱신</div>}/>))}
      </div>
  </div>
  )
}

export default MyCharacterModal