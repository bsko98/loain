import React from 'react'
import './UserInfoComponent.css'

const UserInfoComponent = ({userInfo}) => {
  return (
  <div className='user-info-cotainer'>
      <div className="user-info-nickname">{userInfo.nickname}</div>
      <div className="user-info-details">
          <div className="user-info-class-info">
          {/* 나중에 이미지 태그 추가해주면 됨 */}
          <img  alt="직업 아이콘" className="user-info-class-icon" /> 
          <div className="user-info-job-text">{userInfo.class}</div>
          </div>
          <div className="user-info-divider" />
          <div className="user-info-level-text">{userInfo.level}</div>
      </div>
  </div>
  )
}

export default UserInfoComponent