import React from 'react'
import './UserInfoComponent.css'

const UserInfoComponent = ({userInfo, classIcon}) => {
  return (
  <div className='user-info-cotainer' onClick={()=>console.log(classIcon)}>
      <div className="user-info-nickname">{userInfo.name}</div>
      <div className="user-info-details">
          <div className="user-info-class-info">
          <img  src={classIcon} alt="직업 아이콘" className="user-info-class-icon" /> 
          <div className="user-info-job-text">{userInfo.job}</div>
          </div>
          <div className="user-info-divider" />
          <div className="user-info-level-text">{userInfo.itemLevel}</div>
      </div>
  </div>
  )
}

export default UserInfoComponent