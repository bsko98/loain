import './GlobalComponents.css';
import React, { useState, useRef } from "react"
import { ReactComponent as LoainLogo } from './images/LoainLogoImage.svg';
import { ReactComponent as LoainText } from './images/LoainTextImage.svg';
import { ReactComponent as IdImage } from './images/IdImage.svg';
import { ReactComponent as PwImage } from './images/PwImage.svg';
import { ReactComponent as EmailImage } from './images/EmailImage.svg';
import { ReactComponent as APIKeyImage } from './images/APIKeyImage.svg';
import { ReactComponent as QuestionMarkImage } from './images/QuestionMarkImage.svg';
import { ReactComponent as XMarkImage } from './images/XMarkImage.svg';
import { ReactComponent as Dot } from './images/Dot.svg';

const Signup = ({isOpen}) => {

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputCheckPw, setInputCheckPw] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputAPIKey, setInputAPIKey] = useState("");

    // <Lint>
    // const [subbmittedValueId, setSubbmittedValueId] = useState(null);
    // const [subbmittedValuePw, setSubbmittedValuePw] = useState(null);
    // const [subbmittedValueCheckPw, setSubbmittedValueCheckPw] = useState(null);
    // const [subbmittedValueEmail, setSubbmittedValueEmail] = useState(null);
    // const [subbmittedValueAPIKey, setSubbmittedValueAPIKey] = useState(null);
    const setSubbmittedValueId = useState(null)[1];
    const setSubbmittedValuePw = useState(null)[1];
    const setSubbmittedValueCheckPw = useState(null)[1];
    const setSubbmittedValueEmail = useState(null)[1];
    const setSubbmittedValueAPIKey = useState(null)[1];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeId = (id) => {
        setInputId(id.target.value);            // 입력값 업데이트
    };
    const handleChangeEmail = (email) => {
        setInputEmail(email.target.value);      // 입력값 업데이트
    };
    const handleChangePw = (pw) => {
        setInputPw(pw.target.value);            // 입력값 업데이트
    };
    const handleChangeCheckPw = (checkpw) => {
        setInputCheckPw(checkpw.target.value);  // 입력값 업데이트
    };
    const handleChangeAPIKey = (apikey) => {
        setInputAPIKey(apikey.target.value);    // 입력값 업데이트
    };

    const CheckId = () => {
        setSubbmittedValueId(inputId.trim() ? inputId : null);              // 값이 없으면 null 저장
        if (inputId) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % divList.length);
        }

        setInputId("");
    };
    const CheckPassword = () => {
        setSubbmittedValuePw(inputPw.trim() ? inputPw : null);                  // 값이 없으면 null 저장
        setSubbmittedValueCheckPw(inputCheckPw.trim() ? inputCheckPw : null);   // 값이 없으면 null 저장
        if (!(!inputPw || !inputCheckPw)) {
            if (inputPw === inputCheckPw) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % divList.length);
            }
            setInputPw("");
            setInputCheckPw("");
        }

        setInputPw("");
        setInputCheckPw("");
    };
    const CheckEmail = () => {
        setSubbmittedValueEmail(inputEmail.trim() ? inputEmail : null);     // 값이 없으면 null 저장
        if (inputEmail) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % divList.length);
        }

        setInputEmail("");
    };
    const CheckAPIKey = () => {
        setSubbmittedValueAPIKey(inputAPIKey.trim() ? inputAPIKey : null);     // 값이 없으면 null 저장
        if (inputAPIKey) {
            // API Key 저장
        }

        setInputAPIKey("");

        // 회원가입 완료 후 메인페이지 or 로그인페이지
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const divRef = useRef(null);
    const modalWidth = 240;

    const modalOpen = () => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setModalPosition({
                top: rect.top,
                left: rect.right - modalWidth
            });
            setIsModalOpen(true);
        }
    };
    const modalClose = () => {
        setIsModalOpen(false);
    }

    const divList = [
        <div key={0}>
            <div className='IdPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                    <IdImage style={{ width: '18px', height: '18px' }} />
                    <span style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>아이디 *</span>
                </div>
                <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                    <input className='inputaccount-textbox' type='text' placeholder='사용할 아이디를 입력해주세요.' onChange={handleChangeId} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                    </input>
                </div>
            </div>
        </div>,

        <div key={1}>
            <div className='PwPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                    <PwImage style={{ width: '18px', height: '18px' }} />
                    <span style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>비밀번호 *</span>
                </div>
                <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                    <input className='inputaccount-textbox' type='password' value={inputPw} placeholder='사용할 비밀번호를 입력해주세요.' onChange={handleChangePw} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                    </input>
                </div>
            </div>
            <div className='CheckPwPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column', paddingTop: '16px' }}>
                <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                    <PwImage style={{ width: '18px', height: '18px' }} />
                    <span style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>비밀번호 확인 *</span>
                </div>
                <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                    <input className='inputaccount-textbox' type='password' value={inputCheckPw} placeholder='비밀번호를 한번 더 입력해주세요.' onChange={handleChangeCheckPw} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                    </input>
                </div>
            </div>
        </div>,

        <div key={2}>
            <div key={2} className='EmailPwPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                    <EmailImage style={{ width: '18px', height: '18px' }} />
                    <span style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>이메일 *</span>
                </div>
                <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                    <input className='inputaccount-textbox' type='text' value={inputEmail} placeholder='백업용 이메일을 입력해주세요.' onChange={handleChangeEmail} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                    </input>
                </div>
            </div>
        </div>,

        <div key={3}>
            <div key={3} className='APIKeyPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                    <APIKeyImage style={{ width: '18px', height: '18px' }} />
                    <span style={{ width: 'auto', minWidth: '123px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px', paddingRight: '201px' }}>로스트아크 API Key</span>
                    <div ref={divRef} onClick={modalOpen} style={{ width: '18px', height: '18px' }}>
                        <QuestionMarkImage style={{ width: '18px', height: '18px' }} />
                    </div>
                    {isModalOpen && (
                        <div style={{ position: "absolute", top: `${modalPosition.top}px`, left: `${modalPosition.left}px`, width: `${modalWidth}px`, height: "auto", minHeight: '100px', backgroundColor: "rgba(10, 10, 10, 0.9)", border: "solid", borderRadius: '20px', borderColor: '#737373' }}>
                            <div style={{ width: '216px', height: 'autto', minHeight: '77px', display: 'flex', flexDirection: 'column', padding: '12px' }}>
                                <div className='ModalTitlePos' style={{ width: '216px', height: 'auto', minHeight: '15px', display: 'flex' }}>
                                    <span className='ModalTitle' style={{ width: 'auto', minWidth: '103px', height: 'auto', minHeight: '15px', color: '#DFDFDF', fontSize: '12px', fontWeight: 'bold' }}>로스트아크 API Key</span>
                                    <div onClick={modalClose} style={{ width: '15px', height: '15px', paddingLeft: '96px' }}>
                                        <XMarkImage style={{ width: '15px', height: '15px' }} />
                                    </div>
                                </div>
                                <div className='ModalContentPos' style={{ width: '216px', height: 'auto', minHeight: '52px', display: 'flex', flexDirection: 'column', paddingTop: '10px' }}>
                                    <div className='ModalContent' style={{ width: '216px', height: 'auto', minHeight: '24px', display: 'flex' }}>
                                        <div style={{ width: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Dot />
                                        </div>
                                        <span style={{ color: '#DFDFDF', fontSize: '10px', textAlign: 'left', paddingLeft: '3px' }}>로스트아크 API Key에 대한 설명 문구가 들어갑니다.</span>
                                    </div>
                                    <div className='ModalContent' style={{ width: '216px', height: 'auto', minHeight: '24px', display: 'flex', paddingTop: '4px' }}>
                                        <div style={{ width: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Dot />
                                        </div>
                                        <span style={{ color: '#DFDFDF', fontSize: '10px', textAlign: 'left', paddingLeft: '3px' }}>로스트아크 API Key입력에 대한 권장 문구가 들어갑니다.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div style={{ width: '368px', height: 'auto', minHeight: '62px', backgroundColor: 'white', borderRadius: '12px' }}>
                    <textarea rows={2} className='inputaccount-textbox' type='text' value={inputAPIKey} placeholder='API Key를 입력해주세요.' onChange={handleChangeAPIKey} style={{ width: '304px', height: 'auto', minHeight: '38px', fontSize: '16px', wordWrap: 'break-word', scrollbarWidth: 'none', resize: 'none' }}>
                    </textarea>
                </div>
            </div>
        </div>
    ];

    const btnList = [
        <button key={0} className='mainaccount-button' onClick={CheckId}>
            <span style={{ width: 'auto', minWidth: '85px', height: 'auto', minHeight: '24px', fontSize: '20px' }}>다음 ({currentIndex + 1}/{divList.length})</span>
        </button>,

        <button key={1} className='mainaccount-button' onClick={CheckPassword}>
            <span style={{ width: 'auto', minWidth: '85px', height: 'auto', minHeight: '24px', fontSize: '20px' }}>다음 ({currentIndex + 1}/{divList.length})</span>
        </button>,

        <button key={2} className='mainaccount-button' onClick={CheckEmail}>
            <span style={{ width: 'auto', minWidth: '85px', height: 'auto', minHeight: '24px', fontSize: '20px' }}>다음 ({currentIndex + 1}/{divList.length})</span>
        </button>,

        <button key={3} className='mainaccount-button' onClick={CheckAPIKey}>
            <span style={{ width: 'auto', minWidth: '109px', height: 'auto', minHeight: '24px', fontSize: '20px' }}>회원가입 완료</span>
        </button>
    ];

    if (!isOpen) return null;

    return (
        <div style={{ fontFamily: 'Pretendard' }}>
            <div className='filter-modal-overlay'>
                <div className='mainaccount-container'>
                    <div className='contentaccount-container'>
                        <div className='maincontentaccount-container'>
                            <div className='logoposaccount-container'>
                                <LoainLogo /> { }
                                <LoainText /> { }
                            </div>
                            <div className='inputposaccount-container'>
                                {divList[currentIndex]}
                            </div>
                            <div className='mainbuttonposaccount-container'>
                                {btnList[currentIndex]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup