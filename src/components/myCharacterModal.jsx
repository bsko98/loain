import React, { useState } from "react";
import './myCharacterModal.css'
import CharacterInfoComponent from './characterInfoComponent'
import './CharacterChangeModal.css'
import { ReactComponent as AddButton} from '../assets/images/addButton.svg'
import AddCharacterComponent from "./AddCharacterComponent";


//TODO - 정보 갱신 누를시 어떤 이벤트가 작동하는지 확인해봐야될듯
const MyCharacterModal = ({state}) => {

  const servers = [
    {id:'1', serverName: 'server_1'},
    {id:'2', serverName: 'server_2'},
    {id:'3', serverName: 'server_3'},
    {id:'4', serverName: 'server_4'},
    {id:'5', serverName: 'server_5'},
    {id:'6', serverName: 'server_6'},
    {id:'7', serverName: 'server_7'},
    {id:'8', serverName: 'server_8'}
  ]

  const [activeServer, setActiveServer] = useState(null);
  const [isAddCharacterModalOpen,setIsAddCharacterModalOpen] = useState(false);

  return (
    <div className='my-character-container'>
      <div className='my-character-add-button-row'>
          <span className="my-character-tittle">내 캐릭터</span>
          <button className='open-add-character-button' onClick={()=>setIsAddCharacterModalOpen(!isAddCharacterModalOpen)}>
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
      <AddCharacterComponent isOpen = {isAddCharacterModalOpen} onClose={()=>setIsAddCharacterModalOpen(!isAddCharacterModalOpen)}/>
  </div>
  )
}

export default MyCharacterModal