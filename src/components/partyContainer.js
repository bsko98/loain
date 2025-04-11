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

  // 필터 유무 확인
  const hasFilter = Object.values(selectedFilters).some(
    val => val !== "" && val !== false
  );

  // 태그 매칭 여부
  const isTagMatched = (tagName, value) => {
    if (!hasFilter) return true;  // 필터 없으면 기본 색 유지

    const filterValue = selectedFilters[tagName];
    if (filterValue === "" || filterValue === false) return false;

    // 숫자 비교
    const numericFields = ["itemLevel", "cardValue", "evolution", "realization", "leap"];
    if (numericFields.includes(tagName)) {
      return parseInt(filterValue, 10) >= parseInt(value, 10);
    }

    // 숙련도 범위 비교
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

    // 랏딜/랏폿
    if (tagName === "isLastPot" || tagName === "isLastDeal") {
      return (selectedFilters.isLastPot && value === true) || (selectedFilters.isLastDeal && value === true);
    }

    // 문자열 일치
    return filterValue === value;
  };

  // 태그 목록 (빈 값 제외)
  const allTags = [
    itemLevel && { label: `#${itemLevel}↑`, key: "itemLevel", value: itemLevel },
    skillRange && { label: `#${skillRange}`, key: "skillRange", value: skillRange },
    title && { label: `#${title}`, key: "title", value: title },
    card && cardValue && { label: `#${card} : ${cardValue}`, key: "card", value: card },
    environment && { label: `#${environment}`, key: "environment", value: environment },
    evolution && { label: `#진화 ${evolution}`, key: "evolution", value: evolution },
    realization && { label: `#깨달음 ${realization}`, key: "realization", value: realization },
    leap && { label: `#도약 ${leap}`, key: "leap", value: leap },
    transcendenceWeapon && { label: `#무기 ${transcendenceWeapon}`, key: "transcendenceWeapon", value: transcendenceWeapon },
    transcendenceArmor && { label: `#방어구 ${transcendenceArmor}`, key: "transcendenceArmor", value: transcendenceArmor },
    isLastDeal && { label: "#랏딜", key: "isLastDeal", value: isLastDeal },
    isLastPot && { label: "#랏폿", key: "isLastPot", value: isLastPot },
  ].filter(Boolean); // 빈 값 제거

  // 6개씩 나누기
  const chunkTags = [];
  for (let i = 0; i < allTags.length; i += 6) {
    chunkTags.push(allTags.slice(i, i + 6));
  }
  

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
            {chunkTags.map((tagGroup, groupIdx) => (
              <div className="extra-tag-line" key={groupIdx}>
                {tagGroup.map((tag, idx) => (
                  
                  <span
                    key={idx}
                    className={isTagMatched(tag.key, tag.value) ? "highlight-tag" : ""}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            ))}
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
