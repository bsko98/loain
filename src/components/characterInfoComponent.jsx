import React from 'react'
import './characterInfoComponent.css'



//TODO - 일단 받아오긴하는데 정보갱신 버튼을 새로운 컴포넌트로 만들까? 아니면 기존 모달에서 만들어? 2025.03.15
//TODO - 서버 비활성화도 만들어야되네(이건 건의를 해볼까?) 2025.03.15
//TODO - img 태그 alt 어떻게 해야될지 논의해봐야겠네. 2025.03.15
const characterInfoComponent = ({characterPhoto,characterName,serverName,classInfo,itemLevel,refreshButton, onclick, selectedCharacter, characterId}) => {
  return (
    <div className={`character-info-component-container ${selectedCharacter?.id === characterId ? "selected" : ""}`} onClick={onclick}>
        <div className='character-img-container'><img src={characterPhoto} alt={""} style={{width:'100%', height:'100%', borderRadius:'2px'}}/></div>
        <div className='character-info-container'>
            <div className='character-info-first-row'>
                <div style={{color:'#6B83E1'}}>{characterName}</div>
                <div style={{}}>{refreshButton}</div>
            </div>
            <div className='character-info-second-row'>
                <div style={{width:'132px', marginRight:'12px', textAlign:'left'}}>{serverName}</div>
                <div style={{width:'132px', marginRight:'12px', textAlign:'left'}}>{classInfo}</div>
                <div style={{width:'132px', marginRight:'12px', textAlign:'left'}}>{itemLevel}</div>
            </div>
        </div>
    </div>
  )
}

export default characterInfoComponent