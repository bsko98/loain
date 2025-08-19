import React from 'react'
import './AddCharacterComponent.css'
import { ReactComponent as CloseButton} from "../assets/images/CloseButton.svg";
import { useState } from 'react';
import { socketManager } from '../socket/socket.js';

const AddCharacterComponent = ({isOpen, onClose, state}) => {

    const [characterName, setCharacterName] = useState('');
    const characterNameRegex = /^[a-zA-Z0-9가-힣]{2,12}$/;

    const handleChangeInputVal =(characterName)=>{
        setCharacterName(characterName.target.value);
    }

    const addCharacter=(characterName)=>{

        if(typeof characterName !== 'string'){
            return;
        }

        if(!characterName){
            alert("닉네임을 입력해주세요");
            return;
        }
      
        if(!characterNameRegex.test(characterName)){
            alert("유효하지 않은 닉네임입니다");
            return;
        }

        try{
            if(state.myData.characters.some(character=>character.name === characterName)){
                alert("이미 추가된 캐릭터입니다");
                return;
            }
            
            socketManager.send("addCharacter",{characterName: characterName});
        }catch(error){
            alert("문제가 발생했습니다. 다시 시도해주세요");
        }
        
    }

    if (!isOpen) return null;
  return (
    <div className='filter-modal-overlay'>
        <div className='add-character-container'>
            <div className='add-character-info-box'>
                <div className='add-character-text-area'>
                    <div className='add-character-text-area-title'>
                        캐릭터 추가
                        <button className="character-change-modal-close-btn" onClick={()=>onClose()}><CloseButton/></button>
                    </div>
                    <div className='add-character-text-area-description'>
                        추가하실 캐릭터의 닉네임을 입력해주세요
                    </div>
                </div>
                <div className='add-character-input-area'>
                    <input type='text' 
                        className='add-character-input-area-input' 
                        placeholder='캐릭터 닉네임을 입력해주세요.' 
                        value={characterName}
                        onChange={handleChangeInputVal}
                    />
                </div>
            </div>
            <div className='add-character-button' onClick={()=>addCharacter(characterName)}>
                다음
            </div>
        </div>
    </div>
  )
}

export default AddCharacterComponent