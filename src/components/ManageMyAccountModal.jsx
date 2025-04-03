import React, {useState, useRef}from 'react'
import './ManageMyAccountModal.css';
import { ReactComponent as CloseButton } from '../assets/images/CloseButton.svg';
import { ReactComponent as EmailImage } from '../assets/images/EmailImage.svg';
import { ReactComponent as APIKeyImage } from '../assets/images/APIKeyImage.svg';
import { ReactComponent as QuestionMarkImage } from '../assets/images/QuestionMarkImage.svg';
import { ReactComponent as Dot } from '../assets/images/Dot.svg';
import { ReactComponent as XMarkImage } from '../assets/images/XMarkImage.svg';

const ManageMyAccountModal = ({isOpen, onClose}) => {

    const [isModalOpen, setIsModalOpen] = useState(true);
    const [modalPosition, setModalPosition] = useState({ top: 160, left: 292 });
    const [deleteIdModal, setDeleteIdModal] = useState(false);
    const modalWidth = 240;
    const divRef = useRef(null);

    //NOTE - 물음표 클릭시 모달 뜨는거 일단 고정값으로 해둠  
    const modalOpen = () => {
        if (divRef.current) {
            // const rect = divRef.current.getBoundingClientRect(); - lint
            setModalPosition({
                // top: rect.top,
                // left: rect.right - modalWidth
                top: 160,
                left: 292
            });
            setIsModalOpen(true);
        }
    };

    const modalClose = () => {
        setIsModalOpen(false);
    }

    if (!isOpen) return null;

    return (
        <div className='filter-modal-overlay'>
            <div className='manage-my-account-container'>
                <div className='manage-my-account-first-row'>
                    <span className='manage-my-account-title'>내 계정 관리</span>
                    <CloseButton onClick={onClose} style={{cursor:'pointer'}}/>
                </div>
                <div className='manage-my-account-email-box'>
                    <div className='manage-my-account-email-row'>
                        <EmailImage/>
                        <span className='manage-my-account-email-txt'>이메일 *</span>
                    </div>
                    <div className='manage-my-account-email-input-row'>
                        <input className='manage-my-account-email-input' type='text'/>
                        <button className='manage-my-account-email-btn'>저장</button>
                    </div>
                </div>
                <div className='manage-my-account-api-box'>
                    <div className='manage-my-account-api-row'>
                        <div className='manage-my-account-api-title-row'>
                            <APIKeyImage/>
                            <span className='manage-my-account-api-txt'>로스트아크 API Key</span>
                        </div>
                        <div ref={divRef} onClick={modalOpen} style={{ width: '18px', height: '18px' }}>
                            <QuestionMarkImage style={{ width: '18px', height: '18px', cursor:'pointer'}} />
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
                    <div className='manage-my-account-api-input-row'>
                    <textarea className='inputaccount-textbox' type='text'  placeholder='API Key를 입력해주세요.'  style={{ width: '304px', height: 'auto', minHeight: '38px', fontSize: '16px', wordWrap: 'break-word', scrollbarWidth: 'none', resize: 'none' }}>
                    </textarea>
                        <button className='manage-my-account-api-btn'>저장</button>
                    </div>
                </div>
                <div className='manage-my-account-btn-box'>
                    <button className='manage-my-account-btn' onClick={()=>setDeleteIdModal(!deleteIdModal)}>회원 탈퇴</button>
                    <button className='manage-my-account-btn'>비밀번호 재설정</button>
                </div>
                {deleteIdModal && 
                    <div className='delete-id-modal-container'>
                        <div className='delete-id-modal-title-row'>
                            <span className='delete-id-modal-title-txt'>회원 탈퇴</span>
                        </div>
                        <div className='delete-id-modal-txt-row'>
                            <span>회원탈퇴에 대한 안내문구가 들어갑니다.</span>
                            <br/>
                            <span>회원탈퇴에 대한 안내문구가 들어갑니다2.</span>
                        </div>
                        <div className='delete-id-modal-button-row'>
                            <button className='delete-id-modal-btn' onClick={()=>setDeleteIdModal(!deleteIdModal)}>취소</button>
                            <button className='delete-id-modal-btn'>탈퇴하기</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ManageMyAccountModal