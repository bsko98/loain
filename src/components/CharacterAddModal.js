import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as CloseButton } from '../assets/images/CloseButton.svg'; // ✅ 이 이미지 사용
import "./CharacterAddModal.css";

const CharacterAddModal = ({ isOpen, onClose, onConfirm }) => {
  const [nickname, setNickname] = useState("");
  const modalRef = useRef(null);

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
    <div className="character-modal-overlay">
      <div className="character-modal-container" ref={modalRef}>
        <div className="character-modal-header">
          <span className="character-modal-title">캐릭터 추가</span>
          <button className="character-modal-close-btn" onClick={onClose}>
          <CloseButton className="close-icon" />
          </button>
        </div>
        <div className="character-modal-description">
          캐릭터 추가에 대한 설명글이 들어갑니다. <br />
          주로 프로세스에 대한 설명 내용이 들어가면 좋겠네요.👍
        </div>
        <input
          className="character-modal-input"
          type="text"
          placeholder="캐릭터 닉네임을 입력해주세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button className="character-modal-button"
          onClick={() => onConfirm(nickname)}
        >
          추가
        </button>
      </div>
    </div>
  );
};

export default CharacterAddModal;
