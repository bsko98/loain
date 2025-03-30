import './GlobalComponents.css';
import React , {useState} from "react"
import {ReactComponent as LoainLogo } from './images/LoainLogoImage.svg';
import {ReactComponent as LoainText } from './images/LoainTextImage.svg';
import {ReactComponent as IdImage } from './images/IdImage.svg';
import {ReactComponent as PwImage } from './images/PwImage.svg';
import {ReactComponent as Dot } from './images/Dot.svg';

const Signin = () => {
    return (
        <div style={{fontFamily:'Pretendard'}}>
            <div className='background-Container'>
                <div className='mainAccount-Container'>
                    <div className='contentAccount-Container'>
                        <div className='mainContentAccount-Container'>
                            <div className='logoPosAccount-Container'>
                                <LoainLogo /> {}
                                <LoainText /> {}
                            </div>
                            <div className='inputPosAccount-Container'>
                                <div className='IdPos' style={{width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px' ,display: 'flex', flexDirection: 'column'}}>
                                    <div style={{width: 'auto', minWidth: '77px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px'}}>
                                        <IdImage style={{width: '18px', height: '18px'}}/> {}
                                        <a style={{width: 'auto', minWidth: '51px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px'}}>아이디 *</a>
                                    </div>
                                    <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                        <input className='inputAccount-Textbox' placeholder='아이디를 입력해주세요.' style={{width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px'}}>
                                        </input>
                                    </div>
                                </div>
                                <div className='PwPos' style={{width: 'auto', minWidth: '368px', height: 'auto', minHeight: '73px' ,display: 'flex', flexDirection: 'column', paddingTop: '16px'}}>
                                    <div style={{width: 'auto', minWidth: '90px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', paddingBottom: '12px'}}>
                                        <PwImage style={{width: '18px', height: '18px'}}/> {}
                                        <a style={{width: 'auto', minWidth: '64px', height: 'auto', minHeight: '18px', fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF', paddingLeft: '8px'}}>비밀번호 *</a>
                                    </div>
                                    <div style={{ width: '368px', height: 'auto', minHeight: '43px', backgroundColor: 'white', borderRadius: '12px' }}>
                                        <input className='inputAccount-Textbox' type='password' placeholder='비밀번호를 입력해주세요.' style={{width: '304px', height: 'auto', minHeight: '19px', fontSize: '16px'}}>
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className='mainbuttonPosAccount-Container'>
                                <button className='mainAccount-Button'>
                                    <a style={{width: 'auto', minWidth: '52px', height: 'auto', minHeight: '24px', fontSize: '20px'}}>로그인</a>
                                </button>
                            </div>
                        </div>
                        <div className='subContentAccount-Container' style={{display: 'flex', justifyContent: 'center', paddingTop: '12px'}}>
                            <div className='subContentPos' style={{width: 'auto', minWidth: '256px', height: 'auto', minHeight: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <button className='findEmail' style={{width: 'auto', minWidth: '69px', height: 'auto', minHeight: '18px', backgroundColor: '#1E1E1E', border: 'none'}}>
                                    <a className='underline-Text' style={{fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF'}}>이메일 찾기</a>
                                </button>
                                <Dot /> {}
                                <button className='resetPw' style={{width: 'auto', minWidth: '95px', height: 'auto', minHeight: '18px', backgroundColor: '#1E1E1E', border: 'none'}}>
                                    <a className='underline-Text' style={{fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF'}}>비밀번호 재설정</a>
                                </button>
                                <Dot /> {}
                                <button className='signUp' style={{width: 'auto', minWidth: '52px', height: 'auto', minHeight: '18px', backgroundColor: '#1E1E1E', border: 'none'}}>
                                    <a className='underline-Text' style={{fontSize: '15px', fontWeight: 'bold', color: '#DFDFDF'}}>회원가입</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin