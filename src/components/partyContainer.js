import React, { useState } from "react";
import "./partyContainer.css";

const PartyContainer = ({ partyData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const {
    partytitle,
    raid,
    difficulty,
    rangeStart,
    rangeEnd,
    startTime,
    skillRange,
    card,
    environment,
    evolution,
    realization,
    transcendenceWeapon,
    transcendenceArmor,
    member,
    maxmember,
    membersList = []
  } = partyData;

  const parties = Array.from({ length: 4 }, (_, i) =>
    membersList.slice(i * 4, i * 4 + 4)
  ).filter((party) => party.length > 0); 

  return (
    <div className="party-container">
      <div className="party-container-left">
        <div className="party-container-title">#{partytitle}</div>

        <div className="party-container-info-tags">
          <span>#{raid}</span> |
          <span>#{difficulty}</span> |
          <span>{rangeStart} 관문 ~ {rangeEnd} 관문</span> |
          <span>#{startTime}</span>
        </div>

        <div className="party-container-extra-tags">
          {card && <span>#{card}</span>}
          {environment && <span>#{environment}</span>}
          {evolution && <span>진화 {evolution}</span>}
          {realization && <span>깨달음 {realization}</span>}
          {transcendenceWeapon && <span>무기 {transcendenceWeapon}</span>}
          {transcendenceArmor && <span>방어구 {transcendenceArmor}</span>}
          {skillRange && <span>{skillRange}</span>}
        </div>
      </div>

      <div className="party-container-right">
        <div className="party-container-right-top">
          <div className="party-container-member-count">{member}/{maxmember}</div>
          <button className="apply-btn">{isExpanded ? "신청 취소" : "입장 신청"}</button>
        </div>
        <div className="party-container-right-bottom">
          <button className="expand-btn" onClick={toggleExpand}>
            {isExpanded ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="party-container-expanded">
          {parties.map((party, idx) => (
            <div className="party-container-group" key={idx}>
              <div className="group-label">파티 {idx + 1}</div>
              <div className="member-grid">
                {party.map((member, i) => (
                  <div className="party-container-member" key={i}>
                    <div className="nickname">{member.nickname}</div>
                    <div className="details">{member.itemLevel} | {member.job}</div>
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
