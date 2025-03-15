import React, { useState } from "react";
import './MainPage.css';
import CharacterSelectContainer from '../components/CharacterSelectContainer';
import PartyTitleSearchbar from '../components/PartyTitleSearchbar';
import FilterContainer from '../components/FilterContainer';
import FilterModal from "../components/FilterModal";
import Sidebar from '../components/sidebar';

const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterModalOpen, setFilterModalOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const applyFilters = (filters) => {
        setSelectedFilters(filters);
        setFilterModalOpen(false); 
    };

    return (
      <div>
        <div className="main-Container">
            <div className="content-Wrapper">
                <div className="ad-Container">ad-Container</div>
                <div className="character-Select-Container">
                    <CharacterSelectContainer />
                </div>
                <div className="main-Content">
                    <div className="left-Column">
                        <div className="character-Container">character-Container</div>
                        <div className="arkPassive-Container">arkpassive-Container</div>
                        <div className="card-Container">card-Container</div>
                        <div className="title-Container">title-Container</div>
                    </div>
                    <div className="right-Column">
                        <div className="right-Container">
                            <div className="right-Top-Container">
                                <PartyTitleSearchbar setSearchQuery={setSearchQuery} />
                                <FilterContainer setFilterModalOpen={setFilterModalOpen} selectedFilters={selectedFilters} />
                            </div>
                        </div>
                        <div className="party-Container">party-Container</div>
                    </div>
                </div>
            </div>
            {isFilterModalOpen && <FilterModal isOpen={isFilterModalOpen} onClose={() => setFilterModalOpen(false)} applyFilters={applyFilters} />}
        </div>
    );
};

export default MainPage;
