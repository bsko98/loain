import React from "react";
import "./FilterContainer.css";
import FilterButtonIcon from "../images/FilterButtonIcon.svg";

const FilterContainer = ({ setFilterModalOpen, selectedFilters }) => {
    return (
        <div className="filter-container">
            <div className="filter-tags">
                {selectedFilters.length > 0 ? (
                    selectedFilters.map((filter, index) => (
                        <span key={index} className="filter-tag">
                            {filter}
                        </span>
                    ))
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
