import React, {useState}from 'react'
import './ManageMyAccountModal.css';
import { ReactComponent as CloseButton } from '../assets/images/CloseButton.svg';
import { ReactComponent as EmailImage } from '../assets/images/EmailImage.svg';
import { ReactComponent as APIKeyImage } from '../assets/images/APIKeyImage.svg';
import { ReactComponent as QuestionMarkImage } from '../assets/images/QuestionMarkImage.svg';

const ManageMyAccountModal = ({isOpen, onClose}) => {

    const [isHovered, setIsHovered] = useState(false);


    if (!isOpen) return null;

    return (
        <div className='filter-modal-overlay'>
            <div className='manage-my-account-container'>
                <div className='manage-my-account-first-row'>
                    <span className='manage-my-account-title'>내 계정 관리</span>
                    <CloseButton/>
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
                        <QuestionMarkImage onClick={() => setIsHovered(!isHovered)}/>
                        {isHovered && (
                            <span>sex</span>
                        )}
                    </div>
                    <div className='manage-my-account-api-input-row'>
                        <input className='manage-my-account-api-input' type='text'/>
                        <button className='manage-my-account-api-btn'>저장</button>
                    </div>
                </div>
                <div className='manage-my-account-btn-box'>
                    <button className='manage-my-account-btn'>회원 탈퇴</button>
                    <button className='manage-my-account-btn'>비밀번호 재설정</button>
                </div>
            </div>
        </div>
    )
}

export default ManageMyAccountModal