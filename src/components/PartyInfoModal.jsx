import React from 'react'
import './PartyInfoModal.css'
import { ReactComponent as CloseButton} from "../assets/images/CloseButton.svg";


const PartyInfoModal = ({isOpen, onClose}) => {
    if (!isOpen) return null;
  return (
    <div className='filter-modal-overlay'>
      <div className={`party-info-modal-container ${isOpen ? "visible" : "hidden"}`}>
          <div className='party-info-modal-first-row'>
            <span style={{fontSize:'18px'}}>파티 상세정보</span>
            <CloseButton onClick={()=>console.log('닫기버튼')}/>
          </div>
          <div className='party-info-modal-second-row'>
            <div className='party-info-modal-left-container'>
              <div className='party-info-modal-left-container-first-row'>방 정보</div>
              <div className='party-info-modal-left-container-second-row'>
                <span>sex</span>
              </div>
            </div>
            <div className='party-info-modal-right-container'>
              
            </div>
          </div>
          <div className='party-info-modal-last-row'>
            <button className='last-row-button'>취소</button>
            <button className='last-row-button'>파티 만들기</button>
          </div>
      </div>
    </div>
  )
}

export default PartyInfoModal