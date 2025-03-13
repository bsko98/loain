import React, { useState } from "react";
import "./FilterModal.css";
import CloseButton from "../images/CloseButton.svg";

const FilterModal = ({ onClose, applyFilters }) => {
    const [filters, setFilters] = useState({
        raid: "",
        specialization: "",
        rangeStart: "",
        rangeEnd: "",
        temp: "",
        stat: "",
        card: "",
        environment: "",
        isLock: false,
        isQuick: false,
    });

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleApplyFilters = () => {
        applyFilters(filters);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>검색 필터</h2>
                    <button className="modal-close" onClick={onClose}>
                        <img src={CloseButton} alt="닫기 버튼" className="close-button" />
                    </button>
                </div>
                <div className="modal-content">
                    <div className="filter-section">
                        <label>레이드 선택</label>
                        <div className="filter-dropdown">
                            <select name="raid" value={filters.raid} onChange={handleFilterChange}>
                                <option value="">#레이드 정보01</option>
                                <option value="raid2">#레이드 정보02</option>
                            </select>
                            <select name="specialization" value={filters.specialization} onChange={handleFilterChange}>
                                <option value="">#관문 정보01</option>
                                <option value="specialization2">#관문 정보02</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-section">
                        <label>범위 지정</label>
                        <div className="range-container">
                            <select name="rangeStart" value={filters.rangeStart} onChange={handleFilterChange}>
                                <option value="">#필터 정보01</option>
                            </select>
                            ~
                            <select name="rangeEnd" value={filters.rangeEnd} onChange={handleFilterChange}>
                                <option value="">#필터 정보02</option>
                            </select>
                        </div>
                    </div>
                    <div className="progress-bar">
                        {["1", "2", "3", "4", "5"].map((text, index) => (
                            <div key={index} className="progress-step">{index + 1}</div>
                        ))}
                    </div>
                    <div className="filter-section">
                        <div className="checkbox-container">
                            <input type="checkbox" name="isQuick" checked={filters.isQuick} onChange={handleFilterChange} />
                            <label>내 캐릭터 스펙 불러오기</label>
                        </div>
                        <div className="filter-dropdown">
                          
                        </div>
                    </div>
                    <div className="filter">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
