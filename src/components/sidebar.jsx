import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as LogoImg } from '../assets/images/loainLogo.svg';
import { ReactComponent as LogoTxt } from '../assets/images/loainText.svg';
import { ReactComponent as FindParty } from '../assets/images/findParty.svg';
import { ReactComponent as Login } from '../assets/images/login.svg';
import { ReactComponent as ManageMyCharacter } from '../assets/images/manageMyCharacter.svg';
import { ReactComponent as MakeParty } from '../assets/images/makeParty.svg';
import { ReactComponent as MyParty } from '../assets/images/myParty.svg';
import { ReactComponent as More } from '../assets/images/more.svg';
import { ReactComponent as ManageMyAccount } from '../assets/images/manageMyAccount.svg';
import { ReactComponent as Inquiry } from '../assets/images/inquiry.svg';
import { ReactComponent as Coffee } from '../assets/images/coffee.svg';
import { ReactComponent as Logout } from '../assets/images/logout.svg';
import { ReactComponent as BlueFindParty } from '../assets/images/blueFindParty.svg';
import { ReactComponent as BlueMyParty } from '../assets/images/blueMyParty.svg';
import { ReactComponent as BlueManageMyCharacter } from '../assets/images/blueManageMyCharacter.svg';
import PartyInfoModal from './PartyInfoModal';
import ManageMyAccountModal from './ManageMyAccountModal';

import './sidebar.css';              
import Signin from '../pages/Signin';
import FindId from '../pages/Findid';       
import ResetPassword from '../pages/Resetpassword';
import SignUp from '../pages/Signup';

const Sidebar = () => {

    const [moreInfo, setMoreInfo] = useState(false);
    const [isPartyModalOpen, setIsPartyModalOpen] = useState(false);
    const [isSinginModalOpen, setIsSinginModalOpen] = useState(false);
    const [isMyAccountModalOpen, setIsMyAccountModalOpen] = useState(false);
    const [isFindIdModalOpen,setIsFindIdModalOpen] = useState(false);
    const [isResetPasswordModalOpen,setIsResetPasswordModalOpen] = useState(false);
    const [isSingUpModalOpen,setIsSingUpModalOpen] = useState(false);
    
    const closePartyModal = () => {
        return setIsPartyModalOpen(!isPartyModalOpen);
    }

    const closeSinginModal = () => {
        return setIsSinginModalOpen(!isSinginModalOpen);
    }

    const closeMyAccountModal = () => {
        setIsMyAccountModalOpen(!isMyAccountModalOpen);
    }

    const activeMoreInfo = (moreInfo) => {
        console.log(moreInfo)
        setMoreInfo(!moreInfo);
    }

    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        { id: 1, url: '/', name: '파티찾기', Component: FindParty, blueComponent: BlueFindParty },
        { id: 2, url: '/login', name: '로그인', Component: Login, blueComponent: Login },
        { id: 3, url: '/manageMyCharacter', name: '내 캐릭터 관리', Component: ManageMyCharacter, blueComponent: BlueManageMyCharacter },
        { id: 4, url: '/myParty', name: '내 파티', Component: MyParty, blueComponent: BlueMyParty },
        { id: 5, url: '/makeParty', name: '파티 만들기', Component: MakeParty, blueComponent: MakeParty },
    ]

    const moreItems = [
        { id: 1, url: '/manageMyAccount', name: '내 계정 관리', Component: ManageMyAccount },
        { id: 2, url: '/inquiry', name: '문의하기', Component: Inquiry },
        { id: 3, url: '/coffee', name: '개발자에게 커피사주기', Component: Coffee },
        { id: 4, url: '/logout', name: '로그아웃', Component: Logout },
    ]


    const onClickMenu = (item) =>{
        console.log(item)
        if(item.id === 5){
            setIsPartyModalOpen(!isPartyModalOpen);
        }
        else if(item.id === 2){
            setIsSinginModalOpen(!isSinginModalOpen);
        }
        else{
            navigate(`${item.url}`);
        }
    }

    const openManageMyAccountModal = (item) =>{
        if(item.id === 1){
            setIsMyAccountModalOpen(!isMyAccountModalOpen);
        }
    }


    return (
        <div className='side-bar' style={{ fontFamily: 'Pretendard' }}>
            <div className='logo-row'>
                <LogoImg style={{ marginRight: '4px' }} />
                <LogoTxt style={{ marginTop: '6.75px' }} />
            </div>
            <div className='side-menu-box'>
                <nav>
                    <ul style={{ paddingInlineStart: '0px' }}>
                        {items.map(item => (
                            <li className='menu-row' key={item.id} onClick={() => onClickMenu(item)}>
                                {(location.pathname === item.url && 1) ? <item.blueComponent className='icon' style={{ width:'24px', height:'24px' ,marginRight: '6px', paddingTop: '12px', paddingLeft: '12px' }} /> : <item.Component className='icon' style={{ marginRight: '6px', paddingTop: '12px', paddingLeft: '12px' }} />}
                                <div style={{userSelect:'none', paddingTop: '14.5px', color: (location.pathname === item.url && (item.name !== '로그인' && item.name !== '파티 만들기')) ? '#6B83E1' : '#DFDFDF' }}>{item.name}</div>
                            </li>))}
                    </ul>
                </nav>
            </div>
            {moreInfo ? <div className='more-item-container'>
                <div className='more-item-box'>
                    {moreItems.map(item => (<li key={item.id} className='more-item-box-row' onClick={()=>openManageMyAccountModal(item)}> <item.Component style={{ marginRight: '4px' }}/>
                        <div style={{ fontSize: '15px', color: '#DFDFDF', paddingTop: '1px' }}>{item.name}</div> </li>))}
                    <div className='terms-of-use'>  
                        <div style={{cursor:'pointer'}}>
                            이용약관
                        </div>
                        <div style={{marginLeft:'3px', marginRight:'3px'}}>
                            ⋅
                        </div>
                        <div style={{cursor:'pointer'}}>
                            개인정보 처리방침
                        </div>
                    </div>
                </div>
            </div> : null}
            <div>
                <div className='more-info-button'>
                    <More style={{cursor:'pointer', paddingTop: '12px', paddingLeft: '12px', marginRight: '49px' }} onClick={() => activeMoreInfo(moreInfo)} />
                    <div style={{userSelect:'none', paddingTop: '14.5px', color: '#DFDFDF' }}>계정 관리 및 더보기</div>
                </div>
            </div>
            <Signin isOpen={isSinginModalOpen} onClose={closeSinginModal} isFindIdOpen={()=>setIsFindIdModalOpen(!isFindIdModalOpen)} isResetPasswordOpen={()=>setIsResetPasswordModalOpen(!isResetPasswordModalOpen)} isSignUpOpen={()=>setIsSingUpModalOpen(!isSingUpModalOpen)}/>
            <PartyInfoModal isOpen={isPartyModalOpen} onClose={closePartyModal} modalTitleText={'파티 만들기'} buttonText={'파티 만들기'}/>
            <ManageMyAccountModal isOpen={isMyAccountModalOpen} onClose={closeMyAccountModal}/>
            <ResetPassword isOpen={isResetPasswordModalOpen} onClose={()=>setIsResetPasswordModalOpen(!isResetPasswordModalOpen)}/>
            <FindId isOpen={isFindIdModalOpen} onClose={()=>setIsFindIdModalOpen(!isFindIdModalOpen)}/>
            <SignUp isOpen={isSingUpModalOpen}/> {/*회원가입 부분은 onClose가 없다*/}
        </div>
    )
}

export default Sidebar;