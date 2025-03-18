import React from 'react'
import './characterInfoComponent.css'


const characterInfoComponent = ({characterPhoto,characterName,serverName,classInfo,itemLevel,comp, onclick, selectedCharacter, characterId}) => {
  return (
    <div className={`character-info-component-container ${selectedCharacter?.id === characterId ? "selected" : ""}`} onClick={onclick}>
        <div className='character-img-container'><img src={characterPhoto} alt={""} style={{width:'100%', height:'100%', borderRadius:'2px'}}/></div>
        <div className='character-info-container'>
            <div className='character-info-first-row'>
                <div style={{color:'#6B83E1'}}>{characterName}</div>
                <div>{comp}</div>
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