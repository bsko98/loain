import './GlobalComponents.css';
import React, { useState } from "react"
import { ReactComponent as LoainLogo } from './images/LoainLogoImage.svg';
import { ReactComponent as LoainText } from './images/LoainTextImage.svg';
import { ReactComponent as EmailImage } from './images/EmailImage.svg';

const Findid = ({isOpen, onClose}) => {

    const [inputEmail, setInputEmail] = useState("");               // 입력값 상태
    const [subbmittedValueEmail, setSubbmittedValueEmail] = useState(null);    // 제출된 값 상태
    const [isVisibleInfo, setIsVisibleInfo] = useState(false);      // 처음에는 div를 숨김
    const [isChecked, setIsChecked] = useState(false);              // 인증된 이메일 유무 검증 상태

    const handleChangeEmail = (email) => {
        setInputEmail(email.target.value);  // 입력값 업데이트
    };

    const checkEmail = () => {
        if (isVisibleInfo === false) {
            setIsVisibleInfo(true);     // 버튼을 누르면 div가 보이도록 설정
        }
        setSubbmittedValueEmail(inputEmail.trim() ? inputEmail : null);  // 값이 없으면 null 저장
        if (!inputEmail) {
            setIsChecked(false);
        }
        else {
            setIsChecked(true);
        }
    };

    const maskedId = (id) => {
        return id.slice(0, 5) + "*".repeat(id.length - 5);      // 5번째 글자까지만 표시하고 이후는 *로 처리 후 반환
    };

    const inputId = "dbtjd173";     // 예제 입력값

    const closeModal = (e) =>{
        if(e.target.classList.contains("filter-modal-overlay"))
        {
            onClose();
        }
    }


    if (!isOpen) return null;

    return (
        <div style={{ fontFamily: 'Pretendard' }} onMouseDown={closeModal}>
            <div className='filter-modal-overlay'>
                <div className='mainaccount-container'>
                    <div className='contentaccount-container'>
                        <div className='maincontentaccount-container'>
                            <div className='logoposaccount-container'>
                                <LoainLogo /> { }
                                <LoainText /> { }
                            </div>
                            <div className='inputposaccount-container'>
                                <div className='EmailPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '122px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                                        <EmailImage style={{ width: '18px', height: '18px' }} /> { }
                                        <span style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>이메일 *</span>
                                    </div>
                                    <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                        <input className='inputaccount-textbox' type='text' placeholder='회원가입에 사용한 이메일을 입력해주세요.' onChange={handleChangeEmail} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                                        </input>
                                    </div>
                                    {isVisibleInfo && (
                                        subbmittedValueEmail === null || subbmittedValueEmail === undefined ? (
                                            <div style={{ width: 'auto', minWidth: '280px', height: 'auto', minHeight: '33px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '16px' }}>
                                                <span>등록된 이메일이 아닙니다.</span>
                                            </div>
                                        ) : (
                                            <div style={{ width: 'auto', minWidth: '280px', height: 'auto', minHeight: '33px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '16px' }}>
                                                <div style={{ width: 'auto', minWidth: '280px', height: 'auto', minHeight: '17px', display: 'flex', justifyContent: 'center' }}>
                                                    <span style={{ width: 'auto', minWidth: '96px', height: 'auto', minHeight: '17px', fontSize: '14px', color:'#DFDFDF'}}>사용중인 아이디 :&nbsp;</span>
                                                    <span className='no-underline' style={{ fontSize: '14px', fontWeight: 'bold', color: '#6B83E1' }}>{maskedId(inputId)}</span>
                                                </div>
                                                <span style={{ width: 'auto', minWidth: '280px', height: 'auto', minHeight: '14px', fontSize: '12px', color:'#DFDFDF' }}>개인정보 보호를 위하여 아이디 일부만이 표시됩니다.</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className='mainbuttonposaccount-container'>
                                {isChecked === false ? (
                                    <button className='mainaccount-button' onClick={checkEmail}>
                                        <span style={{ width: 'auto', minWidth: '92px', height: 'auto', minHeight: '24px', fontSize: '20px' }}>아이디 찾기</span>
                                    </button>
                                ) : (
                                    <button className='mainaccount-button' onClick={checkEmail}>
                                        <span style={{ width: 'auto', minWidth: '165px', height: 'auto', minHeight: '24px', fontSize: '20px' }}>로그인 페이지로 이동</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Findid