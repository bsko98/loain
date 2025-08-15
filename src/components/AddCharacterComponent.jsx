import React from 'react'
import './AddCharacterComponent.css'
import { ReactComponent as CloseButton} from "../assets/images/CloseButton.svg";

const AddCharacterComponent = ({isOpen, onClose}) => {
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
                    <input type='text' className='add-character-input-area-input' placeholder='캐릭터 닉네임을 입력해주세요.'/>
                </div>
            </div>
            <div className='add-character-button'>
                다음
            </div>
        </div>
    </div>
  )
}

export default AddCharacterComponent