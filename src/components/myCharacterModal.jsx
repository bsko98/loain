import React, { useState } from "react";
import './myCharacterModal.css'
import CharacterInfoComponent from './characterInfoComponent'
import './CharacterChangeModal.css'
import { ReactComponent as AddButton} from '../assets/images/addButton.svg'
import LoainAuthModal from "./LoainAuthModal";


//TODO - 정보 갱신 누를시 어떤 이벤트가 작동하는지 확인해봐야될듯
const MyCharacterModal = ({state}) => {

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

  const [isLoainAuthModalOpen,setIsLoainAuthModalOpen] = useState(false);
  const [activeServer, setActiveServer] = useState(null);

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
          {servers.map(server => 
            (<button 
              key={server.id} 
              className={`character-change-server-button ${activeServer === server.serverName ? "active" : ""}`}  
              onClick={()=>setActiveServer(server.serverName)}>
              {server.serverName}
            </button>))}
      </div>
      <div className='my-character-info-box'>
      {state.myData.characters.length > 0 ?
        (state.myData.characters.filter((char) => activeServer === null || char.serverName === activeServer).map(character=>( 
          <CharacterInfoComponent 
            key={character.characterName} 
            characterPhoto={character.imageUrl} 
            characterName={character.name} 
            serverName={character.serverName} 
            classInfo={character.job} 
            itemLevel={character.itemLevel} 
            characterId={character.characterId}
            comp={<div onClick={()=>console.log(character.name)} style={{width:'60px', height:'21px', borderRadius:'8px', backgroundColor:'#D28506',color:'white' ,paddingTop:'4px', fontSize:'14px', cursor:'pointer'}}>정보 갱신</div>}/>)))
            :(
              <div className="no-character"><p>해당 서버에 캐릭터가 없습니다.</p></div>
        )}
      </div>
      <LoainAuthModal 
        isOpen={isLoainAuthModalOpen} 
        onClose={()=>setIsLoainAuthModalOpen(!isLoainAuthModalOpen)}/>
  </div>
  )
}

export default MyCharacterModal