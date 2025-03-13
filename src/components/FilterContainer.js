import React, { useState } from "react";
import "./FilterContainer.css";
import FilterModal from "./FilterModal";
import FilterButtonIcon from "../images/FilterButtonIcon.svg";
import CloseButton from "../images/CloseButton.svg";

const FilterContainer = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const applyFilters = (filters) => {
        setSelectedFilters(filters);
        setIsModalOpen(false);
    };

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
            <button className="filter-button" onClick={() => setIsModalOpen(true)}>
                <img src={FilterButtonIcon} alt="필터 아이콘" className="filter-icon" />
                필터
            </button>
            {isModalOpen && <FilterModal onClose={() => setIsModalOpen(false)} applyFilters={applyFilters} />}
        </div>
    );
};

export default FilterContainer;
