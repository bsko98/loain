import React from 'react'
import './UserInfoComponent.css'

const UserInfoComponent = ({userInfo}) => {
  return (
  <div className='user-info-cotainer'>
      <div className="nickname">{userInfo.nickname}</div>
      <div className="details">
          <div className="class-info">
          {/* 나중에 이미지 태그 추가해주면 됨 */}
          <img  alt="직업 아이콘" className="class-icon" /> 
          <div className="job-text">{userInfo.class}</div>
          </div>
          <div className="divider" />
          <div className="level-text">{userInfo.level}</div>
      </div>
  </div>
  )
}

export default UserInfoComponent