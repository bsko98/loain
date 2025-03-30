import './GlobalComponents.css';
import React , {useState} from "react"
import {ReactComponent as LoainLogo } from './images/LoainLogoImage.svg';
import {ReactComponent as LoainText } from './images/LoainTextImage.svg';
import {ReactComponent as IdImage } from './images/IdImage.svg';
import {ReactComponent as PwImage } from './images/PwImage.svg';
import {ReactComponent as EmailImage } from './images/EmailImage.svg';

const Resetpassword = () => {

    const [inputId, setInputId] = useState("");             // 입력값 상태
    const [inputEmail, setInputEmail] = useState("");       // 입력값 상태
    const [inputPw, setInputPw] = useState("");             // 입력값 상태
    const [inputCheckPw, setInputCheckPw] = useState("");   // 입력값 상태
    
    const [subbmittedValueId, setSubbmittedValueId] = useState(null);               // 제출된 값 상태
    const [subbmittedValueEmail, setSubbmittedValueEmail] = useState(null);         // 제출된 값 상태
    const [subbmittedValuePw, setSubbmittedValuePw] = useState(null);               // 제출된 값 상태
    const [subbmittedValueCheckPw, setSubbmittedValueCheckPw] = useState(null);     // 제출된 값 상태

    const [isSelfChecked, setIsSelfChecked] = useState(false);      // 아이디 및 이메일 유무 검증 상태

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

    const selfCheck = () => {
        setSubbmittedValueId(inputId.trim() ? inputId : null);              // 값이 없으면 null 저장
        setSubbmittedValueEmail(inputEmail.trim() ? inputEmail : null);     // 값이 없으면 null 저장
        if (inputId && inputEmail)
        {
            setIsSelfChecked(true);
        }

        setInputId("");
        setInputEmail("");
    };

    const checkPassword = () => {
        setSubbmittedValuePw(inputPw.trim() ? inputPw : null);                  // 값이 없으면 null 저장
        setSubbmittedValueCheckPw(inputCheckPw.trim() ? inputCheckPw : null);   // 값이 없으면 null 저장
        if (!(!inputPw || !inputCheckPw))
        {
            if (inputPw === inputCheckPw)
            {
                // 비밀번호 재설정
            }
            else
            {
                setInputPw("");
                setInputCheckPw("");
            }
        }
        // setInputPw("");
        // setInputCheckPw("");
    };

    return (
        <div style={{fontFamily: 'Pretendard'}}>
            <div className='background-Container'>
                <div className='mainAccount-Container'>
                    <div className='contentAccount-Container'>
                        <div className='mainContentAccount-Container'>
                            <div className='logoPosAccount-Container'>
                                <LoainLogo /> {}
                                <LoainText /> {}
                            </div>
                            <div className='inputPosAccount-Container'>
                                {isSelfChecked === false ? (
                                    <>
                                    <div className='IdPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                                            <IdImage style={{ width: '18px', height: '18px' }} />
                                            <a style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>아이디 *</a>
                                        </div>
                                        <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                            <input className='inputAccount-Textbox' type='text' value={inputId} placeholder='현재 사용중인 아이디를 입력해주세요.' onChange={handleChangeId} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className='EmailPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column', paddingTop: '16px' }}>
                                        <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                                            <EmailImage style={{ width: '18px', height: '18px' }} />
                                            <a style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>이메일 *</a>
                                        </div>
                                        <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                            <input className='inputAccount-Textbox' type='text' value={inputEmail} placeholder='계정에 등록된 이메일을 입력해주세요.' onChange={handleChangeEmail} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                                            </input>
                                        </div>
                                    </div>
                                    </>
                                ) : (
                                    <>
                                    <div className='PwPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                                            <PwImage style={{ width: '18px', height: '18px' }} />
                                            <a style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>비밀번호 *</a>
                                        </div>
                                        <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                            <input className='inputAccount-Textbox' type='password' value={inputPw} placeholder='새 비밀번호를 입력해주세요.' onChange={handleChangePw} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className='CheckPwPos' style={{ width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px', display: 'flex', flexDirection: 'column', paddingTop: '16px' }}>
                                        <div style={{ width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px' }}>
                                            <PwImage style={{ width: '18px', height: '18px' }} />
                                            <a style={{ width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px' }}>비밀번호 확인 *</a>
                                        </div>
                                        <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                            <input className='inputAccount-Textbox' type='password' value={inputCheckPw} placeholder='새 비밀번호를 한번 더 입력해주세요.' onChange={handleChangeCheckPw} style={{ width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px' }}>
                                            </input>
                                        </div>
                                    </div>
                                    </>
                                )}
                            </div>
                            <div className='mainbuttonPosAccount-Container'>
                                {isSelfChecked === false ? (
                                    <button className='mainAccount-Button' onClick={selfCheck}>
                                        <a style={{width: 'auto', minWidth: '70px', height: 'auto', minHeight: '24px', fontSize: '20px'}}>본인인증</a>
                                    </button>
                                ) : (
                                    <button className='mainAccount-Button' onClick={checkPassword}>
                                        <a style={{width: 'auto', minWidth: '126px', height: 'auto', minHeight: '24px', fontSize: '20px'}}>비밀번호 재설정</a>
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

export default Resetpassword