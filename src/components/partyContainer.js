import React, { useState } from "react";
import "./partyContainer.css";

const PartyContainer = ({ partyData }) => {
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
            {/* 첫 번째 줄 태그 묶음 */}
            <div className="extra-tag-line">
              {itemLevel && <span>#{itemLevel}↑</span>}
              {skillRange && <span>#{skillRange}</span>}
              {title && <span>#{title}</span>}
              {card && cardValue && <span>#{card} : {cardValue}</span>}
              {environment && <span>#{environment}</span>}
            </div>

            {/* 두 번째 줄 태그 묶음 */}
            <div className="extra-tag-line">
              {evolution && <span>#진화 {evolution}</span>}
              {realization && <span> #깨달음 {realization}</span>}
              {leap && <span> 도약 {leap}</span>}
              {transcendenceWeapon && <span>#무기 {transcendenceWeapon}</span>}
              {transcendenceArmor && <span>#방어구 {transcendenceArmor}</span>}
              {isLastDeal && <span>#랏딜</span>}
              {isLastPot && <span>#랏폿</span>}
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
                          {/* 나중에 이미지 태그 추가해주면 됨 */}
                            <img  alt="직업 아이콘" className="class-icon" /> 
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
