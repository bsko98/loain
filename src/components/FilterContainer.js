import React from "react";
import "./FilterContainer.css";
import FilterButtonIcon from "../assets/images/FilterButtonIcon.svg";

const FilterContainer = ({ setFilterModalOpen, selectedFilters }) => {
  const fieldLabels = {
    raid: "레이드",
    difficulty: "난이도",
    rangeStart: "시작 관문",
    rangeEnd: "종료 관문",
    skillRange: "숙련도",
    itemLevel: "템렙",
    title: "칭호",
    card: "카드",
    cardValue: "각성",
    environment: "분위기",
    evolution: "진화",
    realization: "깨달음",
    leap: "도약",
    transcendenceWeapon: "초월 무기",
    transcendenceArmor: "초월 방어구",
    isLastPot: "랏폿",
    isLastDeal: "랏딜",
  };

  return (
    <div className="filter-container">
      <div className="filter-inner-row">
        <div className="filter-tags">
          {selectedFilters && Object.keys(selectedFilters).length > 0 ? (
            Object.entries(selectedFilters).map(([key, value], index) => {
              if (!value || value === "") return null;
              let displayValue = value;
              if (typeof value === "boolean") {
                if (!value) return null;
                displayValue = "";
              }

              return (
                <span key={index} className="filter-tag">
                  {fieldLabels[key]}
                  {displayValue ? `: ${displayValue}` : ""}
                </span>
              );
            })
          ) : (
            <span className="filter-placeholder">선택된 필터가 없습니다.</span>
          )}
        </div>

        <div className="filter-button-wrapper">
          <div className="filter-divider" />
          <button className="filter-button" onClick={() => setFilterModalOpen(true)}>
            <img src={FilterButtonIcon} alt="필터 아이콘" className="filter-icon" />
            필터
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
