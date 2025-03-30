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

const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterModalOpen, setFilterModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
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

    const initialPartyData = [
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
                { nickname: "닉네임1", level: "1560", class: "데모닉", classIcon: "" }
            ]
        }
    ];

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
        if (searchTerm !== "" && !party.partytitle.includes(searchTerm)) {
            return false;
        }
        if (!hasFilter) return true;

        // 필터 조건들...
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

    const cardSetInfo = [
        { cardSetName: "세상을 구하는 빛", cardSetEffectType: "성", cardSetAwakenSum: 30, cardSetEffectSum: 0 },
        { cardSetName: "카제로스의 군단장", cardSetEffectType: "암", cardSetAwakenSum: 24, cardSetEffectSum: 0 }
    ];
    const cardSetData = [
        { Name: cardSetInfo[0].cardSetName, EffectType: cardSetInfo[0].cardSetEffectType, AwakenSum: cardSetInfo[0].cardSetAwakenSum, EffectSum: sortDealerCardEffectSum(cardSetInfo[0].cardSetAwakenSum) },
        { Name: cardSetInfo[1].cardSetName, EffectType: cardSetInfo[1].cardSetEffectType, AwakenSum: cardSetInfo[1].cardSetAwakenSum, EffectSum: sortDealerCardEffectSum(cardSetInfo[1].cardSetAwakenSum) }
    ];
    const titleData = [
        { titleName: "몽환의 현시자", titleContent: "몽환의 현시자, 아브렐슈드와의 전투에서 승리하기" },
        { titleName: "광기군단장", titleContent: "광기군단장 쿠크세이튼 물리치기" },
        { titleName: "폭풍의 눈", titleContent: "잔혹한 폭풍의 처단자, 베히모스 처치하기" },
        { titleName: "욕망의 주인", titleContent: "욕망의 주인, 에키드나 처치하기" }
    ];

    function sortDealerCardEffectSum(AwakenSum) {
        switch (true) {
            case AwakenSum === 30:
                return 15;

            case AwakenSum >= 24 && AwakenSum < 30:
                return 11;

            case AwakenSum >= 18 && AwakenSum < 24:
                return 7;

            default:
                return 0;
        }
    }

    return (
        <div className="main-Container">
            <div className="content-Wrapper">
                <div className="ad-Container">ad-Container</div>
                <div className="character-Select-Container">
                    <CharacterSelectContainer setSelectedCharacter={setSelectedCharacter} />
                </div>
                <div className="main-Content">
                    <div className="left-Column">
                        <div className="character-Container">
                            <CharacterInfoDisplay selectedCharacter={selectedCharacter} />
                        </div>
                        <div className="arkPassive-Container">arkpassive-Container</div>
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
