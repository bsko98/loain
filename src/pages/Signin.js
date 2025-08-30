import './GlobalComponents.css';
import React, { useState } from "react"
import { ReactComponent as LoainLogo } from './images/LoainLogoImage.svg';
import { ReactComponent as LoainText } from './images/LoainTextImage.svg';
import { ReactComponent as IdImage } from './images/IdImage.svg';
import { ReactComponent as PwImage } from './images/PwImage.svg';
import { ReactComponent as Dot } from './images/Dot.svg';
import { idValidCheck, pwValidCheck } from '../validation';
import { signInService } from '../services/accountServices';

const Signin = ({isOpen, onClose, isFindIdOpen,isResetPasswordOpen,isSignUpOpen,setIsLoggedIn}) => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    if (!isOpen) return null;
    const handleIdChange = (event) => {
        setInputId(event.target.value);
    };
    const handlePwChange = (event) => {
        setInputPw(event.target.value)
    };

    const closeModal = (e) =>{
        if(e.target.classList.contains("filter-modal-overlay"))
        {
            onClose();
        }
    }

    const naviageToModals = (e) =>{
        // console.log(e)
        if(e.target.id === 'signUp'){
            onClose();
            isSignUpOpen();  
        }else if(e.target.id === "resetPw"){
            onClose();
            isResetPasswordOpen();
        }else{
            onClose();
            isFindIdOpen();
        }
        
    }

    const checkId = () => {
        // id 유효성 체크
        const idValidCheckResult = idValidCheck(inputId);
        if(idValidCheckResult.success === false) {
            console.log(idValidCheckResult.message);
            return { success: false, message: idValidCheckResult.message };
        }
        setInputId("");
        return { success: true, id: idValidCheckResult.id };
    };
    const checkPassword = () => {
        // pw 유효성 체크
        const pwValidCheckResult = pwValidCheck(inputPw);
        if(pwValidCheckResult.success === false) {
            console.log(pwValidCheckResult.message);
            return { success: false, message: pwValidCheckResult.message };
        }
        setInputPw("");
        return { success: true, pw: pwValidCheckResult.pw };
    };
    const runSignIn = async () => {
        try {
            const idValidCheckResult = checkId();
            if(idValidCheckResult.success === false)
                return { success: false,  message: idValidCheckResult.message};
            const pwValidCheckResult = checkPassword();
            if(pwValidCheckResult.success === false)
                return { success: false, message: pwValidCheckResult.message };

            const username = idValidCheckResult.id;
            const password = pwValidCheckResult.pw;
            const signInResult = await signInService(username, password, setIsLoggedIn);
            if(signInResult.success === false)
                return { success: false, message: signInResult.message };
            return { success: true };
        }
        catch(e) {
            console.log(`SignInError: ${e}`);
            return { success: false, message: "문제가 발생했습니다." };
        }
    };
    const onButtonRunSignIn = () => {
        runSignIn().then((signInResult) => {
            if(signInResult.success === true) {
                onClose();
            }
            else if(signInResult.success === false) {
                alert(signInResult.message);
            }
        }).catch((e) => {
            console.log(e);
            alert("문제가 발생 했습니다.");
        });
    }

    return (
        <div className='filter-modal-overlay' onMouseDown={closeModal}>
            <div style={{ fontFamily: 'Pretendard' }}>
                {/* <div className='background-container'> */}
                    <div className='mainaccount-container'>
                        <div className='contentaccount-container'>
                            <div className='maincontentaccount-container'>
                                <div className='logoposaccount-container'>
                                    <LoainLogo /> { }
                                    <LoainText /> { }
                                </div>
                                <div className='inputposaccount-container'>
                                    <div className='IdPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                                            <IdImage style={{ width: '18px', height: '18px' }} /> { }
                                            <span style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>아이디 *</span>
                                        </div>
                                        <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                            <input className='inputaccount-textbox' placeholder='아이디를 입력해주세요.' style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }} value={inputId} onChange={handleIdChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className='PwPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column', paddingTop: '16px' }}>
                                        <div style={{ width: 'auto', minWidth: '90px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                                            <PwImage style={{ width: '18px', height: '18px' }} /> { }
                                            <span style={{ width: 'auto', minWidth: '64px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>비밀번호 *</span>
                                        </div>
                                        <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                            <input className='inputaccount-textbox' type='password' placeholder='비밀번호를 입력해주세요.' style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }} value={inputPw} onChange={handlePwChange}>
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div className='mainbuttonposaccount-container'>
                                    <button className='mainaccount-button' onClick={onButtonRunSignIn}>
                                        <span style={{ width: 'auto', minWidth: '52px', height: 'auto', minHeight: '24px', fontSize: '20px' }}>로그인</span>
                                    </button>
                                </div>
                            </div>
                            <div className='subcontentaccount-container' style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px' }}>
                                <div className='subContentPos' style={{ width: 'auto', minWidth: '256px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <button className='findEmail' style={{ width: 'auto', minWidth: '69px', height: 'auto', minHeight: '18px', backgroundColor: '#1E1E1E', border: 'none' }} onClick={naviageToModals}>
                                        <span id = "findEmail" className='underline-text' style={{ fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF' }}>아이디 찾기</span>
                                    </button>
                                    <Dot /> { }
                                    <button className='resetPw' style={{ width: 'auto', minWidth: '95px', height: 'auto', minHeight: '18px', backgroundColor: '#1E1E1E', border: 'none' }} onClick={naviageToModals}>
                                        <span id = "resetPw" className='underline-text' style={{ fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF' }}>비밀번호 재설정</span>
                                    </button>
                                    <Dot /> { }
                                    <button className='signUp' style={{ width: 'auto', minWidth: '52px', height: 'auto', minHeight: '18px', backgroundColor: '#1E1E1E', border: 'none' }} onClick={naviageToModals}>
                                        <span id = "signUp" className='underline-text' style={{ fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF' }}>회원가입</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Signin