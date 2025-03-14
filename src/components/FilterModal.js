import React, { useState } from "react";
import "./FilterModal.css";
import CloseButton from "../assets/images/CloseButton.svg";


const skillLevels = ["트라이", "클경", "반숙", "숙련", "숙제"];

const FilterModal = ({ isOpen, onClose, applyFilters }) => {
    const [filters, setFilters] = useState({
        raid: "",
        specialization: "",
        rangeStart: "",
        rangeEnd: "",
        isQuick: false,
    });

    const [startLevel, setStartLevel] = useState(null);
    const [endLevel, setEndLevel] = useState(null);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSkillClick = (index) => {
        if (startLevel === null) {
            setStartLevel(index);
            setEndLevel(null);
        } else if (endLevel === null) {
            if (index < startLevel) {
                setEndLevel(startLevel);
                setStartLevel(index);
            } else {
                setEndLevel(index);
            }
        } else {
            setStartLevel(index);
            setEndLevel(null);
        }
    };
    return (
        <div className={`filter-modal-overlay ${isOpen ? "visible" : "hidden"}`}>
            <div className="filter-modal-container">
                    <div className="filter-modal-header">
                        <h2>검색 필터</h2>
                        <button className="modal-close-btn" onClick={onClose}>
                            <img src={CloseButton} alt="닫기 버튼" />
                        </button>
                    </div>
                    <div className="filter-modal-content">
                        <div className="raid-select">
                            <label>레이드 선택</label>
                            <div className="raid-select-dropdown">
                                <select name="raid" value={filters.raid} onChange={handleFilterChange}>
                                    <option value="">#레이드 정보01</option>
                                    <option value="raid2">#레이드 정보02</option>
                                </select>
                                <select name="specialization" value={filters.specialization} onChange={handleFilterChange}>
                                    <option value="">노말</option>
                                    <option value="specialization2">하드</option>
                                </select>
                            </div>
                        </div>
                        <div className="range-container">
                            <label>관문 지정</label>
                            <div className="raid-select-dropdown">
                                <select name="rangeStart" value={filters.rangeStart} onChange={handleFilterChange}>
                                    <option value="">#관문 범위01</option>
                                </select>
                                <label>~</label>
                                <select name="rangeEnd" value={filters.rangeEnd} onChange={handleFilterChange}>
                                    <option value="">#관문 범위02</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-bottom-container">
                            <div className="skill-bar">
                                <div className="skill-wrapper">
                                    {startLevel !== null && endLevel !== null && (
                                        <div
                                            className="skill-line"
                                            style={{
                                                left: `calc(${Math.min(startLevel, endLevel) * 100}px + 20px)`,
                                                width: `calc(${Math.abs(endLevel - startLevel) * 100}px)`,
                                            }}
                                        />
                                    )}
                                    {skillLevels.map((text, index) => (
                                        <div key={index} className="skill-step-container">
                                            <div
                                                className={`skill-step ${
                                                    index === startLevel || index === endLevel ? "selected" : ""
                                                } ${
                                                    startLevel !== null &&
                                                    endLevel !== null &&
                                                    index > startLevel &&
                                                    index < endLevel
                                                        ? "in-range"
                                                        : ""
                                                }`}
                                                onClick={() => handleSkillClick(index)}
                                            />
                                            <span className="skill-label">{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="skill-bar-bottom-line"></div>
                            </div>
                            <div className="mycharacter-checkbox-container">
                                    <input type="checkbox" name="isQuick" checked={filters.isQuick} onChange={handleFilterChange} />
                                    <label className="mycharacter-checkbox-container-label">내 캐릭터 스펙 불러오기</label>
                                </div>
                            <div className="filter-main-container">
                                
                                <div className="character-filter-container">
                                    <div className="character-filter-column-left">
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">템렙</label>
                                            <input type="text" className="character-filter-input" placeholder="입력" />
                                        </div>
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">칭호</label>
                                            <select className="character-filter-dropdown">
                                                <option>선택</option>
                                            </select>
                                        </div>
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">카드</label>
                                            <select className="character-filter-dropdown">
                                                <option>선택</option>
                                            </select>
                                        </div>
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">각성</label>
                                            <select className="character-filter-dropdown">
                                                <option>선택</option>
                                            </select>
                                        </div>
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">분위기</label>
                                            <select className="character-filter-dropdown">
                                                <option>선택</option>
                                            </select>
                                        </div>
                                        <div className="custom-checkbox-container">
                                            <div>
                                                <input type="checkbox" name="isLottPot" id="isLottPot" />
                                                <label htmlFor="isLottPot">랏폿</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="isLottDeal" id="isLottDeal" />
                                                <label htmlFor="isLottDeal">랏딜</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="character-filter-column-right">
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">진화</label>
                                            <input type="text" className="character-filter-input" placeholder="입력" />
                                        </div>
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">깨달음</label>
                                            <input type="text" className="character-filter-input" placeholder="입력" />
                                        </div>
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">도약</label>
                                            <input type="text" className="character-filter-input" placeholder="입력" />
                                        </div>
                                        <label className="transcendence-label">초월</label>
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">무기</label>
                                            <select className="character-filter-dropdown">
                                                <option>선택</option>
                                            </select>
                                        </div>
                                        <div className="character-filter-box">
                                            <label className="character-filter-label">방어구</label>
                                            <select className="character-filter-dropdown">
                                                <option>선택</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-modal-footer">
                        <button className="reset-button" onClick={() => { setFilters({}); setStartLevel(null); setEndLevel(null); }}>필터 초기화</button>
                        <button className="apply-button" onClick={() => applyFilters(filters)}>필터 적용</button>
                    </div>
            </div>
        </div>
    );
};

export default FilterModal;
