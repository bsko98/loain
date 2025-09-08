import React from 'react';
import './ResetPasswordModal.css';
import { ReactComponent as CloseButton } from '../assets/images/CloseButton.svg';
import { ReactComponent as PwImage } from '../assets/images/PwImage.svg';

const ResetPasswordModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  //TODO - 자물쇠 옆에 텍스트 위치를 유성이한테 부탁해서 어떤게 나은지 봐야겠네 (특히 새 비밀번호)
  return (
    <div className="filter-modal-overlay">
      <div className="reset-password-modal-container">
        <div className="reset-password-modal-title-row">
          <span className="reset-password-modal-title">비밀번호 재설정</span>
          <CloseButton onClick={onClose} style={{ cursor: 'pointer' }} />
        </div>
        <div className="reset-password-modal-input-box">
          <div className="reset-password-modal-input-row">
            <div className="reset-password-modal-input-txt-row">
              <PwImage />
              <span className="reset-password-modal-input-txt">
                현재 비밀번호 *
              </span>
            </div>
            <input
              type="text"
              className="reset-password-modal-input"
              placeholder="현재 비밀번호를 입력해주세요."
            />
          </div>
          <div className="reset-password-modal-input-row">
            <div className="reset-password-modal-input-txt-row">
              <PwImage />
              <span
                className="reset-password-modal-input-txt"
                style={{ textAlign: 'left' }}
              >
                새 비밀번호 *
              </span>
            </div>
            <input
              type="text"
              className="reset-password-modal-input"
              placeholder="새 비밀번호를 입력해주세요."
            />
          </div>
          <div className="reset-password-modal-input-row">
            <div className="reset-password-modal-input-txt-row">
              <PwImage />
              <span className="reset-password-modal-input-txt">
                비밀번호 확인 *
              </span>
            </div>
            <input
              type="text"
              className="reset-password-modal-input"
              placeholder="입력한 비밀번호를 한번 더 입력해주세요."
            />
          </div>
        </div>
        <div className="reset-password-modal-button-row">
          <button
            className="reset-password-modal-button-row-btn"
            onClick={onClose}
          >
            취소
          </button>
          <button className="reset-password-modal-button-row-btn">
            비밀번호 재설정
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
