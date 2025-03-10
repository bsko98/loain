import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sidebar.css'
import logoMark from '../assets/images/LogoMark.svg'
import logoName from '../assets/images/LogoName.svg'
import findParty from '../assets/images/FindParty.svg'
import flags from '../assets/images/Flags.svg'
import ghost from '../assets/images/bx_ghost.svg'
import makePartyIcon from '../assets/images/MakePartyIcon.svg'
import loginIcon from '../assets/images/LoginIcon.svg'
import moreOptions from '../assets/images/MoreOptions.svg'


//NOTE - 사이드바
const Sidebar = () => {

  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/", icon: <img src={findParty}/> },
    { name: "Profile", path: "/profile", icon: <img src={flags}/> },
    { name: "Settings", path: "/settings", icon: <img src={ghost}/> },
    { name: "Help", path: "/help", icon: <img src={makePartyIcon}/> },
    { name: "Logout", path: "/logout", icon: <img src={loginIcon}/> },
  ];


  return (
    <div className='side-Menu-Container'>  
        <div className='logo-box'><img src={logoMark}></img><img src={logoName} style={{marginLeft:'4px'}}></img></div>
        <div className='menu-box'>
          {menuItems.map((item) => (
              <button
                key={item.path}
                variant="ghost"
                onClick={() => navigate(item.path)}
                style={{backgroundColor:'#1e1e1e'}}
              >
                {item.icon}
                {item.name}
              </button>
          ))}
        </div>
        <div className='more-option-box'>
          
        </div>
        <div className='more-option-button'> 
          <button className='more-info-button' onClick={()=>alert("sex")}> 
            <img src={moreOptions} style={{width:'24px', height:'24px', paddingTop:'12px'}}></img>
            계정 관리 및 더보기
          </button>
        </div>
    </div>
  )
}

export default Sidebar;