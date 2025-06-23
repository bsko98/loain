import React, { useState } from "react";
import './MainPage.css';
import CharacterSelectContainer from '../components/CharacterSelectContainer';
import PartyTitleSearchbar from '../components/PartyTitleSearchbar';
import FilterContainer from '../components/FilterContainer';
import FilterModal from "../components/FilterModal";
import PartyContainer from "../components/partyContainer";
import CharacterInfoDisplay from "../components/characterInfoDisplay";
import CardContainer from '../components/CardContainer';
import TitleContainer from '../components/TitleContainer';
import ArkPassiveContainer from '../components/ArkPassiveContainer';
import AdComponent from '../components/AdComponent'; 

const MainPage = ({state}) => {

  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
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
    skillRange: "",
  });

  const applyFilters = (filters) => {
    setSelectedFilters(filters);
    setFilterModalOpen(false);
  };



  return (
    <div className="main-Container">
      <div className="content-Wrapper">
        <div className="ad-Container"><AdComponent /></div>
        <div className="character-Select-Container">
          <CharacterSelectContainer
            state={state}
          />
        </div>
        <div className="main-Content">
          <div className="left-Column">
            <div className="character-Container">
              <CharacterInfoDisplay state={state} />
            </div>
            <ArkPassiveContainer state={state} />
            <CardContainer state={state} />
            <TitleContainer state={state} />
          </div>
          <div className="right-Column">
            <div className="right-Container">
              <div className="right-Top-Container">
                <PartyTitleSearchbar/>
                <FilterContainer
                  setFilterModalOpen={setFilterModalOpen}
                  selectedFilters={selectedFilters}
                />
                <div className="main-party-Container">
                  {state.partyList.map((party) => (
                    <PartyContainer
                      key={party.id}
                      partyData={party}
                      selectedFilters={selectedFilters}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isFilterModalOpen && (
          <FilterModal
            isOpen={isFilterModalOpen}
            onClose={() => setFilterModalOpen(false)}
            applyFilters={applyFilters}
            initialFilters={selectedFilters}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;