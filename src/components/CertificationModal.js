import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as CloseButton } from '../assets/images/CloseButton.svg';
import "./CertificationModal.css";

const CertificationModal = ({ isOpen, onClose, onConfirm }) => {
  const modalRef = useRef(null);
  const [certificationData, setCertificationData] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="certification-modal-overlay">
      <div className="certification-modal-container" ref={modalRef}>
        <div className="certification-modal-header">
          <span className="certification-title">인증</span>
          <button className="certification-close-btn" onClick={onClose}><CloseButton /></button>
        </div>
        <div className="certification-description-box">
          캐릭터 추가에 대한 설명글이 들어갑니다.  
          <br />
          주로 프로세스에 대한 설명 내용이 들어가면 좋겠네요.
        </div>
        <div className="certification-input-wrapper">
          <input
            className="certification-input"
            type="text"
            placeholder="나중에 인증 데이터 입력"
            value={certificationData}
            onChange={(e) => setCertificationData(e.target.value)}
          />
        </div>
        <button className="certification-confirm-btn" onClick={() => onConfirm(certificationData)}>
          인증하기
        </button>
      </div>
    </div>
  );
};

export default CertificationModal;
