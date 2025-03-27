import React, {useState} from 'react'
import './PartyInfoModal.css'
import { ReactComponent as CloseButton} from "../assets/images/CloseButton.svg";


const skillLevels = ["트라이", "클경", "반숙", "숙련", "숙제"];
const rangeLevels = ["1관문","2관문","3관문"]



//TODO - 관문 수에 따라 노드 사이 간격이 바뀌는데 이거 처리해줘야됨
const PartyInfoModal = ({isOpen, onClose}) => {

  const [startLevel, setStartLevel] = useState(null);
  const [endLevel, setEndLevel] = useState(null);
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);

  const [filters, setFilters] = useState({
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
      });


  const handleSkillClick = (index) => {
    if (startLevel === null) {
        setStartLevel(index);
        setEndLevel(null);
    } else if (endLevel === null) {
        if (index < startLevel) {
            setEndLevel(startLevel);
            setStartLevel(index);
        } else {
            setEndLevel(index);
        }
    } else {
        setStartLevel(index);
        setEndLevel(null);
    }
  };

  const handleRangeClick = (index) => {
    if (rangeStart === null) {
        setRangeStart(index);
        setRangeEnd(null);
    } else if (rangeEnd === null) {
        if (index < rangeStart) {
            setRangeEnd(rangeStart);
            setRangeStart(index);
        } else {
            setRangeEnd(index);
        }
    } else {
        setRangeStart(index);
        setRangeEnd(null);
    }
  };
  
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => {
        let newFilters = { ...prevFilters };
        if (type === "checkbox") {
            newFilters[name] = checked;
        } else {
            newFilters[name] = value;
        }

        if (name === "rangeStart") {
            const startValue = parseInt(value, 10);
            const endValue = parseInt(prevFilters.rangeEnd, 10);
            if (!isNaN(startValue) && (isNaN(endValue) || startValue > endValue)) {
                newFilters.rangeEnd = "";
            }
        }
        return newFilters;
    });
  };
  
  
  if (!isOpen) return null;


  return (
    <div className='filter-modal-overlay'>
      <div className={`party-info-modal-container ${isOpen ? "visible" : "hidden"}`}>
          <div className='party-info-modal-first-row'>
            <span style={{fontSize:'18px'}}>파티 상세정보</span>
            <CloseButton onClick={onClose} style={{cursor:'pointer'}}/>
          </div>
          <div className='party-info-modal-second-row'>
            <div className='party-info-modal-left-container'>
              <div className='party-info-modal-left-container-first-row'>방 정보</div>
              <div className='party-info-modal-left-container-second-row'>
                <div className='party-info-modal-left-container-basic-row'>
                  <span className='party-info-modal-left-container-basic-span'>방 제목</span>
                  <input className='party-info-modal-left-container-title-input' type='text' placeholder='방 제목을 입력해주세요.'/>
                </div>
                <div className='party-info-modal-left-container-basic-row'>
                  <span className='party-info-modal-left-container-basic-span'>출발 시간</span>
                  <select className='party-info-modal-left-container-basic-select'>
                    <option>출발시간을 선택해주세요.</option>
                  </select>
                </div>
                <div className='party-info-modal-left-container-basic-row'>
                  <span className='party-info-modal-left-container-basic-span'>난이도</span>
                  <select className='party-info-modal-left-container-basic-select'>
                    <option>난이도를 선택해주세요.</option>
                  </select>
                </div>
                <div className='party-info-modal-left-container-range-container'>
                    <span className='party-info-modal-left-container-range-info-text'>관문 정보</span>
                    <div className="skill-bar">
                        <div className="skill-wrapper">
                            {rangeStart !== null && rangeEnd !== null && (
                                <div
                                    className="skill-line"
                                    style={{
                                        left: `calc(${Math.min(rangeStart, rangeEnd) * 100}px + 20px)`,
                                        width: `calc(${Math.abs(rangeEnd - rangeStart) * 100 * Math.abs(rangeEnd - rangeStart)}px)`,
                                    }}
                                />
                            )}
                            {rangeLevels.map((text, index) => (
                                <div key={index} className="skill-step-container">
                                    <div
                                        className={`skill-step ${
                                            index === rangeStart || index === rangeEnd ? "selected" : ""
                                        } ${
                                            rangeStart !== null &&
                                            rangeEnd !== null &&
                                            index > rangeStart &&
                                            index < rangeEnd
                                                ? "in-range"
                                                : ""
                                        }`}
                                        onClick={() => handleRangeClick(index)}
                                    />
                                    <span className="skill-label">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className='party-info-modal-right-container'>
              <div className="raid-select">
                  <label>레이드 선택</label>
                  <div className="raid-select-dropdown">
                      <select name="raid" value={filters.raid} onChange={handleFilterChange}>
                          <option value="raid1">#레이드 정보01</option>
                          <option value="raid2">#레이드 정보02</option>
                      </select>
                      <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange}>
                          <option value="normal">노말</option>
                          <option value="hard">하드</option>
                      </select>
                  </div>
              </div>
              <div className="filter-bottom-container">
                <div className="skill-bar">
                    <div className="skill-wrapper">
                        {startLevel !== null && endLevel !== null && (
                            <div
                                className="skill-line"
                                style={{
                                    left: `calc(${Math.min(startLevel, endLevel) * 100}px + 20px)`,
                                    width: `calc(${Math.abs(endLevel - startLevel) * 100}px)`,
                                }}
                            />
                        )}
                        {skillLevels.map((text, index) => (
                            <div key={index} className="skill-step-container">
                                <div
                                    className={`skill-step ${
                                        index === startLevel || index === endLevel ? "selected" : ""
                                    } ${
                                        startLevel !== null &&
                                        endLevel !== null &&
                                        index > startLevel &&
                                        index < endLevel
                                            ? "in-range"
                                            : ""
                                    }`}
                                    onClick={() => handleSkillClick(index)}
                                />
                                <span className="skill-label">{text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="skill-bar-bottom-line"></div>
                </div>
                <div className="mycharacter-checkbox-container">
                        <input type="checkbox" name="isQuick" />
                        <label className="mycharacter-checkbox-container-label">내 캐릭터 스펙 불러오기</label>
                    </div>
                <div className="filter-main-container">
                    <div className="character-filter-container">
                        <div className="character-filter-column-left">
                            <div className="character-filter-box">
                                <label className="character-filter-label">템렙</label>
                                <input type="text" className="character-filter-input" placeholder="입력" name="itemLevel"  value={filters.itemLevel} onChange={handleFilterChange}/>
                            </div>
                            <div className="character-filter-box">
                                <label className="character-filter-label">칭호</label>
                                <select className="character-filter-dropdown" name="title" value={filters.title} onChange={handleFilterChange}>
                                    <option value="1">없음</option>
                                    <option value="2">꿈꾸는 자</option>
                                    <option value="3">빛을 꺼트리는 자</option>
                                </select>
                            </div>
                            <div className="character-filter-box">
                                <label className="character-filter-label">카드</label>
                                <select className="character-filter-dropdown" name="card" value={filters.card} onChange={handleFilterChange}>
                                    <option value="1">없음</option>
                                    <option value="2">세상을 구하는 빛</option>
                                    <option value="3">카제로스의 군단장</option>
                                </select>
                            </div>
                            <div className="character-filter-box">
                                <label className="character-filter-label">각성</label>
                                <select className="character-filter-dropdown" name="cardValue" value={filters.cardValue} onChange={handleFilterChange}>
                                    <option value="1">18</option>
                                    <option value="2">24</option>
                                    <option value="3">30</option>
                                </select>
                            </div>
                            <div className="character-filter-box">
                                <label className="character-filter-label">분위기</label>
                                <select className="character-filter-dropdown" name="environment" value={filters.environment} onChange={handleFilterChange}>
                                    <option value="1">예민x</option>
                                    <option value="2">예민max</option>
                                </select>
                            </div>
                            <div className="custom-checkbox-container">
                                <div>
                                    <input type="checkbox" name="isLastPot" id="isLastPot" value={filters.isLastPot} onChange={handleFilterChange}/>
                                    <label htmlFor="isLastPot">랏폿</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="isLastDeal" id="isLastDeal" value={filters.isLastDeal} onChange={handleFilterChange}/>
                                    <label htmlFor="isLastDeal">랏딜</label>
                                </div>
                            </div>
                        </div>
                        <div className="character-filter-column-right">
                            <div className="character-filter-box">
                                <label className="character-filter-label" >진화</label>
                                <input type="text" className="character-filter-input" placeholder="입력" name="evolution" value={filters.evolution} onChange={handleFilterChange}/>
                            </div>
                            <div className="character-filter-box">
                                <label className="character-filter-label">깨달음</label>
                                <input type="text" className="character-filter-input" placeholder="입력" name="realization" value={filters.realization} onChange={handleFilterChange}/>
                            </div>
                            <div className="character-filter-box">
                                <label className="character-filter-label">도약</label>
                                <input type="text" className="character-filter-input" placeholder="입력" name="leaf" value={filters.leaf} onChange={handleFilterChange}/>
                            </div>
                            <label className="transcendence-label">초월</label>
                            <div className="character-filter-box">
                                <label className="character-filter-label">무기</label>
                                <select className="character-filter-dropdown" name="transcendenceWeapon" value={filters.transcendenceWeapon} onChange={handleFilterChange}>
                                    <option value="1">없음</option>
                                    <option value="2">무풀</option>
                                </select>
                            </div>
                            <div className="character-filter-box">
                                <label className="character-filter-label">방어구</label>
                                <select className="character-filter-dropdown" name="transcendenceArmor" value={filters.transcendenceArmor} onChange={handleFilterChange}>
                                    <option value="1">0</option>
                                    <option value="2">75</option>
                                    <option value="3">방풀</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='party-info-modal-last-row'>
            <button className='last-row-button'>취소</button>
            <button className='last-row-button'>파티 만들기</button>
          </div>
      </div>
    </div>
  )
}

export default PartyInfoModal