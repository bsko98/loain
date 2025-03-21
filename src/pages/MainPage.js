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
            raid: "카멘",// -> /난이도/칭호/카드->카드 밸류/관문 시작/관문 끝/인원 수 
            difficulty: "하드", //-> 노말/ 하드 / 헬  0 1 2 -> 변환
            rangeStart: "1", 
            rangeEnd: "3",
            itemLevel: "1640", // -> 받은대로 그대로 보여주면 됨.
            title: "빛을 꺼트리는 자",
            card: "세상을 구하는 빛",
            cardValue: "30",
            environment: "예민x", //-> 받은거 변환
            evolution: "100", // -> 받은대로 그대로 보여주면 됨.
            realization: "200", // -> 받은대로 그대로 보여주면 됨.
            leap: "300", // -> 받은대로 그대로 보여주면 됨.
            transcendenceWeapon: "무풀", // -> 0 1 -> 1인경우 무풀 아닌경우 아님 
            transcendenceArmor: "방풀",
            isLastPot: true, //-> 그대로
            isLastDeal: false, //-> 그대로
            skillRange: "반숙 ~ 숙련", //-> 0 1 2 3 4 -> 변환 트라이 클경 반숙 숙련 숙제
            maxmember: 4,
            member: 3,
            startTime: "12:00",
            partyMembers: [
                { nickname: "닉네임1", level: "1640", class: "버서커", classIcon: "" },
                { nickname: "닉네임2", level: "1640", class: "소서리스", classIcon: "" },
                { nickname: "닉네임3", level: "1640", class: "홀리나이트", classIcon: "" }
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
                { nickname: "닉네임1", level: "1560", class: "데모닉", classIcon: "" },
                { nickname: "닉네임2", level: "1560", class: "창술사", classIcon: "" },
                { nickname: "닉네임3", level: "1560", class: "블레이드", classIcon: "" },
                { nickname: "닉네임4", level: "1560", class: "건슬링어", classIcon: "" },
                { nickname: "닉네임5", level: "1560", class: "홀리나이트", classIcon: "" },
                { nickname: "닉네임6", level: "1560", class: "기상술사", classIcon: "" },
                { nickname: "닉네임7", level: "1560", class: "아르카나", classIcon: "" }
            ]
        },
        {
            id: 3,
            partytitle: "숙련팟 모집 랏딜",
            raid: "베히모스",
            difficulty: "하드",
            rangeStart: "2",
            rangeEnd: "3",
            itemLevel: "1560",
            title: "",
            card: "",
            cardValue: "",
            environment: "예민max",
            evolution: "",
            realization: "",
            leap: "",
            transcendenceWeapon: "없음",
            transcendenceArmor: "방풀",
            isLastPot: false,
            isLastDeal: true,
            skillRange: "숙련 ~ 숙제",
            maxmember: 16,
            member: 1,
            startTime: "12:00",
            partyMembers: [
                { nickname: "닉네임1", level: "1560", class: "데모닉", classIcon: "" },
                
            ]
        }
    ];

    // 필터 유무 체크
    const hasFilter = Object.values(selectedFilters).some(val => val !== "" && val !== false);

    // 파티 필터링 함수
    const filteredParties = PartyData.filter(party => {
      if (!hasFilter) return true;
  
      // 난이도
      if (selectedFilters.difficulty && selectedFilters.difficulty !== party.difficulty) return false;
  
      // 관문
      if (selectedFilters.rangeStart && selectedFilters.rangeEnd) {
          if (parseInt(party.rangeEnd) < parseInt(selectedFilters.rangeStart) ||
              parseInt(party.rangeStart) > parseInt(selectedFilters.rangeEnd)) return false;
      }
  
      // 템렙
      if (selectedFilters.itemLevel && parseInt(selectedFilters.itemLevel) < parseInt(party.itemLevel)) return false;
  
      // 숙련도
      if (selectedFilters.skillRange) {
          const skillLevels = ["트라이", "클경", "반숙", "숙련", "숙제"];
          const [pStart, pEnd] = party.skillRange.split(" ~ ");
          const [fStart, fEnd] = selectedFilters.skillRange.split(" ~ ");
          const pStartIdx = skillLevels.indexOf(pStart);
          const pEndIdx = skillLevels.indexOf(pEnd);
          const fStartIdx = skillLevels.indexOf(fStart);
          const fEndIdx = skillLevels.indexOf(fEnd);
          if (!(fStartIdx <= pEndIdx && fEndIdx >= pStartIdx)) return false;
      }
  
      // 칭호
      if (selectedFilters.title && selectedFilters.title !== party.title) return false;
  
      // 카드 + 카드 밸류
      if (selectedFilters.card && selectedFilters.card !== party.card) return false;
      if (selectedFilters.cardValue && parseInt(selectedFilters.cardValue) < parseInt(party.cardValue)) return false;
  
      // 분위기
      if (selectedFilters.environment && selectedFilters.environment !== party.environment) return false;
  
      // 진화, 깨달음, 도약
      if (selectedFilters.evolution && parseInt(selectedFilters.evolution) < parseInt(party.evolution)) return false;
      if (selectedFilters.realization && parseInt(selectedFilters.realization) < parseInt(party.realization)) return false;
      if (selectedFilters.leap && parseInt(selectedFilters.leap) < parseInt(party.leap)) return false;
  
      // 무기/방어구 초월
      if (selectedFilters.transcendenceWeapon && selectedFilters.transcendenceWeapon !== party.transcendenceWeapon) return false;
      if (selectedFilters.transcendenceArmor && selectedFilters.transcendenceArmor !== party.transcendenceArmor) return false;
  
      // 랏딜/랏폿 필터
      if ((selectedFilters.isLastPot || selectedFilters.isLastDeal)) {
          if (!(party.isLastPot || party.isLastDeal)) return false;
      }
  
      return true;
  });

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
                                    {filteredParties.map((party) => (
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
