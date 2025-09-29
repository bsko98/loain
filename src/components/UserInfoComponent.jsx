import React from 'react'
import './UserInfoComponent.css'
import { CLASS_ICON_MAP } from "../mappers/classIconMap.js";

const UserInfoComponent = ({userInfo}) => {
  const getClassIcon=(job)=>{
    return CLASS_ICON_MAP[job];
  }

  return (
  <div className='user-info-cotainer'>
      <div className="user-info-nickname">{userInfo.name}</div>
      <div className="user-info-details">
          <div className="user-info-class-info">
          <img  src={getClassIcon(userInfo.job)} alt="직업 아이콘" className="user-info-class-icon" /> 
          <div className="user-info-job-text">{userInfo.job}</div>
          </div>
          <div className="user-info-divider" />
          <div className="user-info-level-text">{userInfo.itemLevel}</div>
      </div>
  </div>
  )
}

export default UserInfoComponent