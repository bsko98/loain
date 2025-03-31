import React, { useState } from "react";
import "./PartyTitleSearchbar.css";
import UpdateIcon from "../assets/images/UpdateIcon.svg";
import PartyTitleSearchIcon from "../assets/images/PartyTitleSearchIcon.svg";

const PartyTitleSearchbar = ({ setSearchQuery, onUpdate }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        setSearchQuery(searchTerm.trim());
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="party-search-container">
            <div className="party-header">
                <span className="party-title">모집중인 파티</span>
                <button className="update-button" onClick={onUpdate}>
                    <img src={UpdateIcon} alt="업데이트" className="update-icon" />
                    업데이트
                </button>
            </div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="검색할 파티명을 입력해주세요."
                    className="search-input"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button className="search-button" onClick={handleSearch}>
                    <img src={PartyTitleSearchIcon} alt="검색" className="search-icon" />
                </button>
            </div>
        </div>
    );
};

export default PartyTitleSearchbar;
