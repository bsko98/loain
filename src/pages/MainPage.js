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

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const [characterList] = useState([
    {
      id: 1,
      name: "하트소서",
      server: "아만",
      job: "소서리스",
      itemlevel: 1720,
      image: "https://img.lostark.co.kr/armory/3/F4201758FCE4C335A1A8A3BAC13AF299E581F48918866FB4BCFF636CC6E204CF.jpg?v=20250407150402",
      evolution: 100,
      realization: 200,
      leap: 300,
      cardList: [
        { cardname: "세상을 구하는 빛", cardvalue: 30, effecttype: "성" },
        { cardname: "카제로스의 군단장", cardvalue: 26, effecttype: "암" }
      ],
      titleList: [
        { titleName: "몽환의 현시자", titleContent: "몽환의 현시자, 아브렐슈드와의 전투에서 승리하기" },
        { titleName: "광기군단장", titleContent: "광기군단장 쿠크세이튼 물리치기" }
      ]
    },
    {
      id: 2,
      name: "test카마인",
      server: "카마인",
      job: "버서커",
      itemlevel: 1700,
      image: "/img1.png",
      evolution: 50,
      realization: 60,
      leap: 70,
      cardList: [
        { cardname: "세상을 구하는 빛", cardvalue: 18, effecttype: "성" }
      ],
      titleList: [
        { titleName: "마수군단장", titleContent: "마수군단장 발탄 물리치기" },
        { titleName: "폭풍의 눈", titleContent: "베히모스 물리치기" }
      ]
    }
  ]);

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

  const rawPartyData = [
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
      maxmember: 16,
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
      id: 2,
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
      startTime: "12:00",
      partyMembers: [
        { nickname: "닉네임1", level: "1560", class: "데모닉", classIcon: "" }
      ]
    }
  ];
  
  const initialPartyData = rawPartyData.map(party => ({
    ...party,
    member: party.partyMembers.length
  }));

  const [partyData, setPartyData] = useState(initialPartyData);

  const applyFilters = (filters) => {
    setSelectedFilters(filters);
    setFilterModalOpen(false);
  };

  const handleUpdate = () => {
    setPartyData([...initialPartyData]);
    setSearchQuery("");
  };

  const hasFilter = Object.values(selectedFilters).some(val => val !== "" && val !== false);

  const filteredParties = partyData.filter(party => {
    if (!hasFilter && searchQuery.trim() === "") return true;
    const searchTerm = searchQuery.trim();
    if (searchTerm !== "" && !party.partytitle.includes(searchTerm)) return false;

    if (selectedFilters.difficulty && selectedFilters.difficulty !== party.difficulty) return false;
    if (selectedFilters.rangeStart && selectedFilters.rangeEnd) {
      if (parseInt(party.rangeEnd) < parseInt(selectedFilters.rangeStart) ||
          parseInt(party.rangeStart) > parseInt(selectedFilters.rangeEnd)) return false;
    }

    if (selectedFilters.itemLevel && parseInt(selectedFilters.itemLevel) < parseInt(party.itemLevel)) return false;

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

    if (selectedFilters.title && selectedFilters.title !== party.title) return false;
    if (selectedFilters.card && selectedFilters.card !== party.card) return false;
    if (selectedFilters.cardValue && parseInt(selectedFilters.cardValue) < parseInt(party.cardValue)) return false;

    if (selectedFilters.environment && selectedFilters.environment !== party.environment) return false;
    if (selectedFilters.evolution && parseInt(selectedFilters.evolution) < parseInt(party.evolution)) return false;
    if (selectedFilters.realization && parseInt(selectedFilters.realization) < parseInt(party.realization)) return false;
    if (selectedFilters.leap && parseInt(selectedFilters.leap) < parseInt(party.leap)) return false;

    if (selectedFilters.transcendenceWeapon && selectedFilters.transcendenceWeapon !== party.transcendenceWeapon) return false;
    if (selectedFilters.transcendenceArmor && selectedFilters.transcendenceArmor !== party.transcendenceArmor) return false;

    if ((selectedFilters.isLastPot || selectedFilters.isLastDeal)) {
      if (!(party.isLastPot || party.isLastDeal)) return false;
    }

    return true;
  });

  const getAwakenAndEffectSum = (cardValue) => {
    if (cardValue >= 30) return { displayAwaken: 30, effectSum: 15 };
    if (cardValue >= 24) return { displayAwaken: 24, effectSum: 11 };
    if (cardValue >= 18) return { displayAwaken: 18, effectSum: 7 };
    return { displayAwaken: 0, effectSum: 0 };
  };

  const cardSetData = selectedCharacter?.cardList?.map(card => {
    const { displayAwaken, effectSum } = getAwakenAndEffectSum(card.cardvalue);
    return {
      cardname: card.cardname,
      cardvalue: displayAwaken,
      effecttype: card.effecttype,
      effectsum: effectSum
    };
  }) || [];

  const titleData = selectedCharacter?.titleList || [];

  return (
    <div className="main-Container">
      <div className="content-Wrapper">
        <div className="ad-Container">ad-Container</div>
        <div className="character-Select-Container">
          <CharacterSelectContainer
            setSelectedCharacter={setSelectedCharacter}
            characterList={characterList}
            selectedCharacter={selectedCharacter}
          />
        </div>
        <div className="main-Content">
          <div className="left-Column">
            <div className="character-Container">
              <CharacterInfoDisplay selectedCharacter={selectedCharacter} />
            </div>
            <ArkPassiveContainer
              evolution={selectedCharacter?.evolution}
              realization={selectedCharacter?.realization}
              leap={selectedCharacter?.leap}
            />
            <CardContainer listTitle={"가지고 있는 카드"} listData={cardSetData} />
            <TitleContainer listTitle={"가지고 있는 칭호"} listData={titleData} />
          </div>
          <div className="right-Column">
            <div className="right-Container">
              <div className="right-Top-Container">
                <PartyTitleSearchbar setSearchQuery={setSearchQuery} onUpdate={handleUpdate} />
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