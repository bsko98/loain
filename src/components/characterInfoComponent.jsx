import React from 'react'
import './characterInfoComponent.css'



// 이거 지우삼삼
//TODO - 일단 받아오긴하는데 정보갱신 버튼을 새로운 컴포넌트로 만들까? 아니면 기존 모달에서 만들어?
const characterInfoComponent = ({characterPhoto,characterName,serverName,classInfo,itemLevel,refreshButton}) => {
  return (
    <div className='character-info-component-container'>
        <div className='character-img-container'><img src={characterPhoto} style={{width:'100%', height:'100%', borderRadius:'2px'}}/></div>
        <div className='character-info-container'>
            <div className='character-info-first-row'>
                <div>{characterName}</div>
                <div style={{width:'60px', height:'25px', borderRadius:'8px', backgroundColor:'#D28506', color:'#DFDFDF', fontSize:'14px'}}>{refreshButton}</div>
            </div>
            <div className='character-info-second-row'>
                <div>{serverName}</div>
                <div>{classInfo}</div>
                <div>{itemLevel}</div>
            </div>
        </div>
    </div>
  )
}

export default characterInfoComponent