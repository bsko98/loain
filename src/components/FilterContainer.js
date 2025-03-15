import React, { useState } from "react";
import FilterModal from "./FilterModal";
import "./FilterContainer.css";
import FilterButtonIcon from "../assets/images/FilterButtonIcon.svg";

const FilterContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});

    const applyFilters = (filters) => {
        setSelectedFilters(filters);
        setIsModalOpen(false);
        console.log(applyFilters);
    };

    return (
        <div className="filter-container">
            <div className="filter-tags">
                {Object.entries(selectedFilters).map(([key, value]) =>
                    value ? (
                        <span key={key} className="filter-tag">
                            {key}: {value}
                        </span>
                    ) : null
                )}
            </div>
            <button className="filter-button" onClick={() => setIsModalOpen(true)}>
                <img src={FilterButtonIcon} alt="필터 아이콘" className="filter-icon" />
                필터
            </button>
            {isModalOpen && <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} applyFilters={applyFilters} />}
        </div>
    );
};

export default FilterContainer;
