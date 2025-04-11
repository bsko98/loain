import React, { useState, useEffect, useRef } from "react";
import "./FilterModal.css";
import CloseButton from "../assets/images/CloseButton.svg";

const skillLevels = ["트라이", "클경", "반숙", "숙련", "숙제"];
const gateOptions = [1, 2, 3];
const defaultFilters = {
    raid: "",
    difficulty: "",
    rangeStart: "",
    rangeEnd: "",
    itemLevel: "",
    title: "",
    card: "",
    cardValue: "",
    environment: "",
    evolution: "",
    realization: "",
    leap: "",
    transcendenceWeapon: "",
    transcendenceArmor: "",
    isLastPot: false,
    isLastDeal: false,
};

const FilterModal = ({ isOpen, onClose, applyFilters, initialFilters }) => {
    const [filters, setFilters] = useState(defaultFilters);
    const [startLevel, setStartLevel] = useState(null);
    const [endLevel, setEndLevel] = useState(null);
    const modalRef = useRef(null); 
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        
        if (initialFilters) {
            setFilters({ ...defaultFilters, ...initialFilters });
            if (initialFilters.skillRange) {
                const [start, , end] = initialFilters.skillRange.split(" ");
                const startIdx = skillLevels.indexOf(start);
                const endIdx = skillLevels.indexOf(end);
                setStartLevel(startIdx);
                setEndLevel(endIdx);
            } else {
                setStartLevel(null);
                setEndLevel(null);
            }
        }
    }, [initialFilters, isOpen]);

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

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((prevFilters) => {
            let newFilters = { ...prevFilters };
            newFilters[name] = type === "checkbox" ? checked : value;

            if (name === "rangeStart") {
                const startValue = parseInt(value, 10);
                const endValue = parseInt(prevFilters.rangeEnd, 10);
                if (!isNaN(startValue) && (isNaN(endValue) || startValue > endValue)) {
                    newFilters.rangeEnd = "";
                }
            }

            return newFilters;
        });
    };

    const handleApplyFilters = () => {
        applyFilters({
            ...filters,
            skillRange:
                startLevel !== null && endLevel !== null
                    ? `${skillLevels[startLevel]} ~ ${skillLevels[endLevel]}`
                    : "",
        });
        onClose();
    };

    const handleResetFilters = () => {
        setFilters(defaultFilters);
        setStartLevel(null);
        setEndLevel(null);
    };

    return (
        <div className={`filter-modal-overlay ${isOpen ? "visible" : "hidden"}`}>
            <div className="filter-modal-container" ref={modalRef}>
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
                                <option value="raid1">#레이드 정보01</option>
                                <option value="raid2">#레이드 정보02</option>
                            </select>
                            <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange}>
                                <option value="none">선택</option>
                                <option value="normal">노말</option>
                                <option value="hard">하드</option>
                            </select>
                        </div>
                    </div>

                    <div className="range-container">
                        <label>관문 지정</label>
                        <div className="raid-select-dropdown">
                            <select name="rangeStart" value={filters.rangeStart} onChange={handleFilterChange}>
                                <option value="">선택</option>
                                {gateOptions.map((gate) => (
                                    <option key={gate} value={gate}>{gate}</option>
                                ))}
                            </select>
                            <label>~</label>
                            <select name="rangeEnd" value={filters.rangeEnd} onChange={handleFilterChange}>
                                <option value="">선택</option>
                                {gateOptions
                                    .filter((gate) => parseInt(gate) >= parseInt(filters.rangeStart || 0))
                                    .map((gate) => (
                                        <option key={gate} value={gate}>{gate}</option>
                                    ))}
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
                                            width: `calc(${Math.abs(endLevel - startLevel) * 100}px)`
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

                        <div className="custom-checkbox-container" style={{ paddingLeft: "16px", marginTop: "16px"}}>
                            <div>
                                <input type="checkbox" name="isQuick" id="isQuick" />
                                <label htmlFor="isQuick">내 캐릭터 스펙 불러오기</label>
                            </div>
                        </div>

                        <div className="filter-main-container">
                            <div className="character-filter-container">
                                <div className="character-filter-column-left">
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">템렙</label>
                                        <input type="text" className="character-filter-input" placeholder="입력" name="itemLevel" value={filters.itemLevel} onChange={handleFilterChange} />
                                    </div>
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">칭호</label>
                                        <select className="character-filter-dropdown" name="title" value={filters.title} onChange={handleFilterChange}>
                                            <option value="1">없음</option>
                                            <option value="2">꿈꾸는 자</option>
                                            <option value="3">빛을 꺼트리는 자</option>
                                        </select>
                                    </div>
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">카드</label>
                                        <select className="character-filter-dropdown" name="card" value={filters.card} onChange={handleFilterChange}>
                                            <option value="1">없음</option>
                                            <option value="2">세상을 구하는 빛</option>
                                            <option value="3">카제로스의 군단장</option>
                                        </select>
                                    </div>
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">각성</label>
                                        <select className="character-filter-dropdown" name="cardValue" value={filters.cardValue} onChange={handleFilterChange}>
                                            <option value="1">18</option>
                                            <option value="2">24</option>
                                            <option value="3">30</option>
                                        </select>
                                    </div>
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">분위기</label>
                                        <select className="character-filter-dropdown" name="environment" value={filters.environment} onChange={handleFilterChange}>
                                            <option value="1">예민x</option>
                                            <option value="2">예민max</option>
                                        </select>
                                    </div>
                                    <div className="custom-checkbox-container">
                                        <div>
                                            <input type="checkbox" name="isLastPot" id="isLastPot" checked={filters.isLastPot} onChange={handleFilterChange} />
                                            <label htmlFor="isLastPot">랏폿</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="isLastDeal" id="isLastDeal" checked={filters.isLastDeal} onChange={handleFilterChange} />
                                            <label htmlFor="isLastDeal">랏딜</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="character-filter-column-right">
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">진화</label>
                                        <input type="text" className="character-filter-input" placeholder="입력" name="evolution" value={filters.evolution} onChange={handleFilterChange} />
                                    </div>
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">깨달음</label>
                                        <input type="text" className="character-filter-input" placeholder="입력" name="realization" value={filters.realization} onChange={handleFilterChange} />
                                    </div>
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">도약</label>
                                        <input type="text" className="character-filter-input" placeholder="입력" name="leap" value={filters.leap} onChange={handleFilterChange} />
                                    </div>
                                    <label className="transcendence-label">초월</label>
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">무기</label>
                                        <select className="character-filter-dropdown" name="transcendenceWeapon" value={filters.transcendenceWeapon} onChange={handleFilterChange}>
                                            <option value="1">없음</option>
                                            <option value="2">무풀</option>
                                        </select>
                                    </div>
                                    <div className="character-filter-box">
                                        <label className="character-filter-label">방어구</label>
                                        <select className="character-filter-dropdown" name="transcendenceArmor" value={filters.transcendenceArmor} onChange={handleFilterChange}>
                                            <option value="1">0</option>
                                            <option value="2">75</option>
                                            <option value="3">방풀</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-modal-footer">
                    <button className="reset-button" onClick={handleResetFilters}>필터 초기화</button>
                    <button className="apply-button" onClick={handleApplyFilters}>필터 적용</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
