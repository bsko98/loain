import React, { useState } from "react";
import "./partyContainer.css";

const PartyContainer = ({ partyData, selectedFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const toggleExpand = () => setIsExpanded(prev => !prev);
  const toggleApply = () => setIsApplied(prev => !prev);

  const {
    partytitle,
    raid,
    difficulty,
    rangeStart,
    rangeEnd,
    startTime,
    card,
    cardValue,
    environment,
    evolution,
    realization,
    leap,
    transcendenceWeapon,
    transcendenceArmor,
    skillRange,
    itemLevel,
    title,
    isLastPot,
    isLastDeal,
    maxmember,
    member,
    partyMembers
  } = partyData;

  const totalParties = Math.ceil(maxmember / 4);
  const allMembers = partyMembers || [];

  const groupedMembers = Array.from({ length: totalParties }, (_, groupIdx) => {
    const groupStart = groupIdx * 4;
    const group = allMembers.slice(groupStart, groupStart + 4);
    const filledGroup = [...group];
    while (filledGroup.length < 4) {
      filledGroup.push(null);
    }
    return filledGroup;
  });

  const hasFilter = Object.values(selectedFilters).some(val => val !== "" && val !== false);

  const isTagMatched = (tagName, value) => {
    const filterValue = selectedFilters[tagName];

    if (!hasFilter) return true;
    if (!filterValue) return false;

    if (tagName === "isLastPot" || tagName === "isLastDeal") {
      return selectedFilters[tagName] === true && value === true;
    }

    const numericFields = ["itemLevel", "cardValue", "evolution", "realization", "leap"];
    if (numericFields.includes(tagName)) {
      return parseInt(filterValue, 10) >= parseInt(value, 10);
    }

    if (tagName === "skillRange") {
      const skillLevels = ["트라이", "클경", "반숙", "숙련", "숙제"];
      const [partyStart, partyEnd] = value.split(" ~ ");
      const [filterStart, filterEnd] = filterValue.split(" ~ ");
      const pStartIdx = skillLevels.indexOf(partyStart);
      const pEndIdx = skillLevels.indexOf(partyEnd);
      const fStartIdx = skillLevels.indexOf(filterStart);
      const fEndIdx = skillLevels.indexOf(filterEnd);
      return fStartIdx <= pEndIdx && fEndIdx >= pStartIdx;
    }

    return filterValue === value;
  };

  const sortTagsByMatch = (tags) => {
    if (!hasFilter) return tags;
    return [...tags].sort((a, b) => {
      const aMatch = isTagMatched(a.key, a.value);
      const bMatch = isTagMatched(b.key, b.value);
      return bMatch - aMatch;
    });
  };

  // 첫 번째 줄 태그 템렙, 숙련도, 파티제목, 카경, 분위기
  const firstLineTags = [
    { label: `#${itemLevel}↑`, key: "itemLevel", value: itemLevel },
    { label: `#${skillRange}`, key: "skillRange", value: skillRange },
    { label: `#${title}`, key: "title", value: title },
    { label: `#${card} : ${cardValue}`, key: "card", value: card },
    { label: `#${environment}`, key: "environment", value: environment },
  ];

  // 두 번째 줄 태그 진화 깨달음 도약 무기초월 방어구 초월 랏딜 랏폿폿
  const secondLineTags = [
    { label: `#진화 ${evolution}`, key: "evolution", value: evolution },
    { label: `#깨달음 ${realization}`, key: "realization", value: realization },
    { label: `#도약 ${leap}`, key: "leap", value: leap },
    { label: `#무기 ${transcendenceWeapon}`, key: "transcendenceWeapon", value: transcendenceWeapon },
    { label: `#방어구 ${transcendenceArmor}`, key: "transcendenceArmor", value: transcendenceArmor },
    { label: "#랏딜", key: "isLastDeal", value: isLastDeal },
    { label: "#랏폿", key: "isLastPot", value: isLastPot },
  ];

  return (
    <div className="party-container">
      <div className="party-container-main">
        <div className="party-container-left">
          <div className="party-container-title">#{partytitle}</div>

          <div className="party-container-info-tags">
            <span>#{raid}</span> |
            <span>#{difficulty}</span> |
            <span>{rangeStart} 관문 ~ {rangeEnd} 관문</span> |
            <span>#{startTime}</span>
          </div>

          <div className="party-container-extra-tags">
            <div className="extra-tag-line">
              {sortTagsByMatch(firstLineTags).map((tag, idx) =>
                tag.value && (
                  <span key={idx} className={!isTagMatched(tag.key, tag.value) ? "dim-tag" : ""}>
                    {tag.label}
                  </span>
                )
              )}
            </div>
            <div className="extra-tag-line">
              {sortTagsByMatch(secondLineTags).map((tag, idx) =>
                tag.value && (
                  <span key={idx} className={!isTagMatched(tag.key, tag.value) ? "dim-tag" : ""}>
                    {tag.label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="party-container-right">
          <div className="party-container-top">
            <div className="party-container-member-count">{member}/{maxmember}</div>
            <button className="apply-btn" onClick={toggleApply}>
              {isApplied ? "신청 취소" : "입장 신청"}
            </button>
          </div>
          <div className="expand-btn-wrapper">
            <button className="expand-btn" onClick={toggleExpand}>
              {isExpanded ? "▲" : "▼"}
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="party-container-expanded">
          {groupedMembers.map((group, groupIndex) => (
            <div className="party-container-group" key={groupIndex}>
              <div className="group-label">파티{groupIndex + 1}</div>
              <div className="member-grid">
                {group.map((member, idx) => (
                  <div className="party-container-member" key={idx}>
                    {member ? (
                      <>
                        <div className="nickname">#{member.nickname}</div>
                        <div className="details">
                          <div className="class-info">
                            <img src={member.classIcon} alt="직업 아이콘" className="class-icon" />
                            <div className="job-text">#{member.class}</div>
                          </div>
                          <div className="divider" />
                          <div className="level-text">#{member.level}</div>
                        </div>
                      </>
                    ) : (
                      <div className="nickname empty-slot">빈 슬롯</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PartyContainer;
