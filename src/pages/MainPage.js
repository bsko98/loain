import React, { useState } from "react";
import './MainPage.css';
import CharacterSelectContainer from '../components/CharacterSelectContainer';
import PartyTitleSearchbar from '../components/PartyTitleSearchbar';
import FilterContainer from '../components/FilterContainer';
import FilterModal from "../components/FilterModal";
import PartyContainer from "../components/partyContainer";

const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
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

    const PartyData = [
        {
          id: 1,
          partytitle: "카멘 하드 1~3 반숙 방풀방 랏폿",
          raid: "카멘",
          difficulty: "하드",
          rangeStart: "1",
          rangeEnd: "3",
          itemLevel: "1640",
          title: "빛을 꺼트리는 자",
          card: "세상을 구하는 빛",
          cardValue: "30",
          environment: "예민x",
          evolution: "100",
          realization: "200",
          leap: "300",
          transcendenceWeapon: "무풀",
          transcendenceArmor: "방풀",
          isLastPot: true,
          isLastDeal: false,
          skillRange: "반숙 ~ 숙련",
          maxmember: 4,
          member: 3,
          startTime: "12:00",
          partyMembers: [
            {
              nickname: "닉네임1",
              level: "1640",
              class: "버서커",
              classIcon:""
            },
            {
              nickname: "닉네임2",
              level: "1640",
              class: "소서리스",
              classIcon:""
            },
            {
              nickname: "닉네임3",
              level: "1640",
              class: "홀리나이트",
              classIcon:""
            }
          ]
        },
        {
          id: 2,
          partytitle: "숙련팟 모집 랏딜",
          raid: "베히모스",
          difficulty: "하드",
          rangeStart: "2",
          rangeEnd: "3",
          itemLevel: "1560",
          title: "빛을 꺼트리는 자",
          card: "카제로스의 군단장",
          cardValue: "30",
          environment: "예민max",
          evolution: "100",
          realization: "999",
          leap: "300",
          transcendenceWeapon: "없음",
          transcendenceArmor: "방풀",
          isLastPot: false,
          isLastDeal: true,
          skillRange: "숙련 ~ 숙제",
          maxmember: 16,
          member: 7,
          startTime: "12:00",
          partyMembers: [
            {
              nickname: "닉네임1",
              level: "1560",
              class: "데모닉",
              classIcon:""
            },
            {
              nickname: "닉네임2",
              level: "1560",
              class: "창술사",
              classIcon:""
            },
            {
              nickname: "닉네임3",
              level: "1560",
              class: "블레이드",
              classIcon:""
            },
            {
              nickname: "닉네임4",
              level: "1560",
              class: "건슬링어",
              classIcon:""
            },
            {
              nickname: "닉네임5",
              level: "1560",
              class: "홀리나이트",
              classIcon:""
            },
            {
              nickname: "닉네임6",
              level: "1560",
              class: "기상술사",
              classIcon:""
            },
            {
              nickname: "닉네임7",
              level: "1560",
              class: "아르카나",
              classIcon:""
            }
          ]
        }
      ];
      
      console.log("Partytitle test -> " + searchQuery); //lint-cex 

    return (
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
                                <FilterContainer
                                    setFilterModalOpen={setFilterModalOpen}
                                    selectedFilters={selectedFilters}
                                />
                                <div className="main-party-Container">
                                    {PartyData.map((party) => (
                                       <PartyContainer key={party.id} partyData={party} />
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
