import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoImg } from'../assets/images/loainLogo.svg';
import { ReactComponent as LogoTxt } from '../assets/images/loainText.svg';
import { ReactComponent as FindParty } from '../assets/images/findParty.svg';
import { ReactComponent as Login } from '../assets/images/login.svg';
import { ReactComponent as ManageMyCharacter } from '../assets/images/manageMyCharacter.svg';
import { ReactComponent as MakeParty } from '../assets/images/makeParty.svg';
import { ReactComponent as MyParty } from '../assets/images/myParty.svg';
import { ReactComponent as More } from '../assets/images/more.svg';

import './sidebar.css';



const Sidebar = () => {

    const [moreInfo,setMoreInfo] = useState(false);

    const activeMoreInfo = (moreInfo)=> {
        console.log(moreInfo)
        setMoreInfo(!moreInfo);
    }

    const navigate = useNavigate();

    const items = [
        { id: 1, url:'findParty' ,name: '파티찾기', Component: FindParty },
        { id: 2, url:'login' ,name: '로그인', Component: Login },
        { id: 3, url:'manageMyCharacter' ,name: '내 캐릭터 관리', Component: ManageMyCharacter },
        { id: 4, url:'myParty', name: '내 파티', Component: MyParty },
        { id: 5, url:'makeParty',name: '파티 만들기', Component: MakeParty },
    ]

    const moreItems = [

    ]


    const onClickMenu = (item) =>{
        console.log(item)
        navigate(`/${item.url}`)
    }


  return (
    <div className='side-bar'>
        <div className='logo-row'>
            <LogoImg style={{marginRight:'4px'}}/>
            <LogoTxt style={{marginTop:'6.75px'}}/>
        </div>
        <div className='side-menu-box'>
            <nav>
                <ul style={{paddingInlineStart:'0px'}}>
                    {items.map(item=>(<li className='menu-row' key={item.id} onClick={()=>onClickMenu(item)}><item.Component style={{marginRight:'6px'}}/><div style={{paddingTop:'2.5px'}}>{item.name}</div></li>))}
                </ul>
            </nav>
        </div>
            {moreInfo ? <div className='more-item-container'> <h2>계정 관리 및 더보기</h2> </div> : <div className='more-item-container2'></div>}
        <div>
            <div className='more-info-button'>
                <More style={{paddingTop:'12px', paddingLeft:'12px', marginRight:'49px'}}  onClick={()=>activeMoreInfo(moreInfo)}/>
                <div style={{paddingTop:'14.5px'}}>계정 관리 및 더보기</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;