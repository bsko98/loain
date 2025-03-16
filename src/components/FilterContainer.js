import React from "react";
import "./FilterContainer.css";
import FilterButtonIcon from "../assets/images/FilterButtonIcon.svg";

const FilterContainer = ({ setFilterModalOpen, selectedFilters }) => {
  // 각 필드에 대한 라벨 정의
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
      <div className="filter-tags">
        {selectedFilters && Object.keys(selectedFilters).length > 0 ? (
          Object.entries(selectedFilters).map(([key, value], index) => {
            // 빈 값은 출력하지 않음
            if (!value || value === "") return null;

            let displayValue = value;
            // 체크박스는 true일 때만 표시
            if (typeof value === "boolean") {
              if (!value) return null;
              displayValue = ""; // 체크박스는 값 없이 라벨만 표시
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
      <button className="filter-button" onClick={() => setFilterModalOpen(true)}>
        <img src={FilterButtonIcon} alt="필터 아이콘" className="filter-icon" />
        필터
      </button>
    </div>
  );
};

export default FilterContainer;
