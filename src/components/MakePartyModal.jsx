import React, { useState, useEffect } from 'react';
import './PartyInfoModal.css';
import { ReactComponent as CloseButton } from '../assets/images/CloseButton.svg';
import { socketManager } from '../socket/socket.js';
import { CreatePartySchema } from '../validation/_party.js';
import {
  titleNameData,
  cardNameData,
  bossNameData,
} from '../mappers/dataMapTransformer.js';

const skillLevels = ['트라이', '클경', '반숙', '숙련', '숙제'];
const startTime = [];

const interval = 15; // 15분 간격
const maxTime = 180; // 최대 120분 후까지
for (let i = interval; i <= maxTime; i += interval) {
  const time = { text: `${i}분 후`, value: i };
  startTime.push(time);
}

const MakePartyModal = ({ isOpen, onClose, modalTitleText, buttonText }) => {
  const [startMastery, setStartMastery] = useState('');
  const [endMastery, setEndMastery] = useState('');
  const bossNameList = [
    'commander_1',
    'commander_2',
    'commander_3',
    'commander_4',
    'commander_5',
    'commander_6',
    'kazeroth_1',
    'kazeroth_2',
    'kazeroth_3',
    'kazeroth_4',
    'epic_1',
  ];

  const difficultyMap = {
    commander_1: 'hell',
    commander_2: 'hell',
    commander_3: 'hell',
    commander_4: 'hell',
    commander_5: 'hard',
    commander_6: 'hard',
    kazeroth_1: 'hard',
    kazeroth_2: 'hard',
    kazeroth_3: 'hard',
    kazeroth_4: 'hard',
    epic_1: 'normal',
  };
  const difficultyObj = {
    normal: ['normal'],
    hard: ['normal', 'hard'],
    hell: ['normal', 'hard', 'hell'],
  };
  const difficultyValue = {
    normal: 1,
    hard: 2,
    hell: 3,
  };
  const gateMap = {
    commander_1: 'two',
    commander_2: 'two',
    commander_3: 'three',
    commander_4: 'four',
    commander_5: 'three',
    commander_6: 'four',
    kazeroth_1: 'two',
    kazeroth_2: 'two',
    kazeroth_3: 'two',
    kazeroth_4: 'three',
    epic_1: 'two',
  };

  const gateObj = {
    two: [1, 2],
    three: [1, 2, 3],
    four: [1, 2, 3, 4],
  };

  const cards = [
    'Dealer_1',
    'Dealer_2',
    'Dealer_3',
    'Dealer_4',
    'Dealer_5',
    'Dealer_6',
  ];

  const titles = [
    'commander_valtan_1',
    'commander_vykas_1',
    'commander_kouku_saton_1',
    'commander_abrelshud_1',
    'commander_Illiakan_1',
    'commander_kamen_1',
    'commander_kamen_2',
    'commander_kamen_3',
    'kazeroth_echidna_1',
    'kazeroth_egir_1',
    'kazeroth_abrelshud_1',
    'kazeroth_mordoom_1',
    'epic_behemoth_1',
  ];

  const [filters, setFilters] = useState({
    boss: '',
    difficulty: Number(0),
    startGate: '',
    endGate: '',
    itemLevel: Number(0),
    partyTitle: '',
    title: '',
    card: '',
    awakening: Number(0),
    evolution: Number(0),
    enlightenment: Number(0),
    enviornment: Number(0),
    leap: Number(0),
    transcendenceWeapon: Number(0),
    transcendenceArmor: Number(0),
    lastSupporter: false,
    lastDealer: false,
    startTime: '',
    startMastery: '',
    endMastery: '',
  });

  const handleSkillClick = index => {
    if (startMastery === null) {
      setStartMastery(index);
      setEndMastery(null);
    } else if (endMastery === null) {
      if (index < startMastery) {
        setEndMastery(startMastery);
        setStartMastery(index);
      } else {
        setEndMastery(index);
      }
    } else {
      setStartMastery(index);
      setEndMastery(null);
    }
  };

  useEffect(() => {
    setFilters(prevFilters => {
      let newFilters = { ...prevFilters };
      newFilters['startMastery'] = startMastery;
      newFilters['endMastery'] = endMastery;
      return newFilters;
    });
  }, [startMastery, endMastery]);

  const handleFilterChange = e => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => {
      let newFilters = { ...prevFilters };
      if (type === 'checkbox') {
        newFilters[name] = checked;
      } else {
        newFilters[name] = value;
      }

      if (type === 'text' && name === 'partyTitle') {
        newFilters[name] = e.target.value;
      } else if (type === 'text') {
        newFilters[name] = e.target.value.replaceAll(/\D/g, '');
      }

      if (name === 'startGate') {
        const startValue = parseInt(value, 10);
        const endValue = parseInt(prevFilters.endGate, 10);
        if (!isNaN(startValue) && (isNaN(endValue) || startValue > endValue)) {
          newFilters.endGate = '';
        }
      }
      if (type === 'select-one') {
        if (
          name === 'startTime' ||
          name === 'card' ||
          name === 'title' ||
          name === 'boss'
        ) {
          newFilters[name] = value;
        } else {
          newFilters[name] = Number(value);
        }
      }

      return newFilters;
    });
  };

  const closeModal = e => {
    if (e.target.classList.contains('filter-modal-overlay')) {
      onClose();
    }
  };

  const getPartyFilter = filters => {
    const { evolution, enlightenment, leap } = filters;
    const { transcendenceWeapon, transcendenceArmor } = filters;
    const {
      startGate,
      endGate,
      startTime,
      startMastery,
      endMastery,
      itemLevel,
      title,
      lastSupporter,
      lastDealer,
      enviornment,
    } = filters;
    const transcend = {
      weapon: transcendenceWeapon,
      armor: transcendenceArmor,
    };

    const card = {
      name: filters.card ? cardNameData.toExternal(filters.card) : '',
      awakening: filters.awakening,
    };
    const currentDate = new Date();
    currentDate.setUTCMinutes(currentDate.getUTCMinutes() + Number(startTime));
    const partyFilter = {
      startGate,
      endGate,
      startTime: currentDate.toISOString(),
      startMastery,
      endMastery,
      itemLevel: Number(itemLevel),
      title,
      lastSupporter,
      lastDealer,
      environment: Number(enviornment),
    };
    partyFilter.arkPassive = {
      evolution: Number(evolution),
      enlightenment: Number(enlightenment),
      leap: Number(leap),
    };
    partyFilter.transcend = transcend;
    partyFilter.card = card;
    return partyFilter;
  };

  const createParty = () => {
    try {
      const partyFilter = getPartyFilter(filters);
      const filters2 = {
        partyTitle: filters.partyTitle,
        boss: filters.boss,
        difficulty: filters.difficulty,
        partyFilter: partyFilter,
      };
      const result = CreatePartySchema.safeParse(filters2);
      if (result.success) {
        if (partyFilter.card.name !== '') {
          partyFilter.card = [partyFilter.card];
        } else {
          partyFilter.card = [];
        }
        partyFilter.title = titleNameData.toExternal(partyFilter.title);
        socketManager.send('createParty', {
          title: filters.partyTitle,
          boss: bossNameData.toExternal(filters.boss),
          difficulty: filters.difficulty,
          partyFilter: partyFilter,
        });
        onClose();
      } else {
        alert('문제가 발생했습니다. 다시 시도해주세요');
      }
    } catch (error) {
      const fieldErrors = {};
      error.errors.forEach(err => {
        fieldErrors[err.path[0]] = err.message;
      });
      alert('문제가 발생했습니다. 다시 시도해주세요');
      console.log(fieldErrors);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="filter-modal-overlay" onMouseDown={closeModal}>
      <div
        className={`party-info-modal-container ${isOpen ? 'visible' : 'hidden'}`}
      >
        <div className="party-info-modal-first-row">
          <span style={{ fontSize: '18px', fontWeight: '600' }}>
            {modalTitleText}
          </span>
          <CloseButton onClick={onClose} style={{ cursor: 'pointer' }} />
        </div>
        <div className="party-info-modal-second-row">
          <div className="party-info-modal-left-container">
            <div className="party-info-modal-left-container-first-row">
              방 정보
            </div>
            <div className="party-info-modal-left-container-second-row">
              <div className="party-info-modal-left-container-basic-row">
                <span className="party-info-modal-left-container-basic-span">
                  방 제목
                </span>
                <input
                  className="party-info-modal-left-container-title-input"
                  type="text"
                  name="partyTitle"
                  placeholder="방 제목을 입력해주세요."
                  value={filters.partyTitle}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="party-info-modal-left-container-basic-row">
                <span className="party-info-modal-left-container-basic-span">
                  출발 시간
                </span>
                <select
                  className="party-info-modal-left-container-basic-select"
                  name="startTime"
                  value={filters.startTime}
                  onChange={handleFilterChange}
                >
                  <option>출발시간을 선택해주세요.</option>
                  {startTime.map(time => (
                    <option value={time.value} key={time.value}>
                      {time.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="party-info-modal-left-container-basic-row">
                <span className="party-info-modal-left-container-basic-span">
                  레이드
                </span>
                <select
                  className="party-info-modal-left-container-basic-select"
                  name="boss"
                  value={filters.boss}
                  onChange={handleFilterChange}
                >
                  <option value={undefined}>레이드를 선택해주세요.</option>
                  {bossNameList.map(bossName => (
                    <option key={bossName} value={bossName}>
                      {bossName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="party-info-modal-left-container-basic-row">
                <span className="party-info-modal-left-container-basic-span">
                  난이도
                </span>
                <select
                  className="party-info-modal-left-container-basic-select"
                  name="difficulty"
                  value={filters.difficulty}
                  onChange={handleFilterChange}
                >
                  <option>난이도를 선택해주세요.</option>
                  {filters.boss &&
                    difficultyObj[difficultyMap[filters.boss]].map(dif => (
                      <option value={Number(difficultyValue[dif])} key={dif}>
                        {dif}
                      </option>
                    ))}
                </select>
              </div>
              <div className="party-info-modal-left-container-range-container">
                <span className="party-info-modal-left-container-range-info-text">
                  관문 정보
                </span>
                <div className="range-container2">
                  <div className="raid-select-dropdown2">
                    <select
                      name="startGate"
                      value={filters.startGate}
                      onChange={handleFilterChange}
                    >
                      <option value="">선택</option>
                      {filters.boss &&
                        gateObj[gateMap[filters.boss]].map(gate => (
                          <option key={gate} value={gate}>
                            {gate}
                          </option>
                        ))}
                    </select>
                    <label>~</label>
                    <select
                      name="endGate"
                      value={filters.endGate}
                      onChange={handleFilterChange}
                    >
                      <option value="">선택</option>
                      {filters.boss &&
                        gateObj[gateMap[filters.boss]]
                          .filter(
                            gate =>
                              parseInt(gate, 10) >=
                              parseInt(filters.startGate || 0, 10)
                          )
                          .map(gate => (
                            <option key={gate} value={gate}>
                              {gate}
                            </option>
                          ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="party-info-modal-right-container">
            <div className="party-info-modal-left-container-first-row">
              상세정보
            </div>
            <div className="filter-bottom-container2">
              <div className="skill-bar">
                <div className="skill-wrapper">
                  {startMastery !== null && endMastery !== null && (
                    <div
                      className="skill-line"
                      style={{
                        left: `calc(${Math.min(startMastery, endMastery) * 100}px + 20px)`,
                        width: `calc(${Math.abs(endMastery - startMastery) * 100}px)`,
                      }}
                    />
                  )}
                  {skillLevels.map((text, index) => (
                    <div key={index} className="skill-step-container">
                      <div
                        className={`skill-step ${
                          index === startMastery || index === endMastery
                            ? 'selected'
                            : ''
                        } ${
                          startMastery !== null &&
                          endMastery !== null &&
                          index > startMastery &&
                          index < endMastery
                            ? 'in-range'
                            : ''
                        }`}
                        onClick={() => {
                          handleSkillClick(index);
                        }}
                      />
                      <span className="skill-label">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="skill-bar-bottom-line"></div>
              </div>
              <div
                className="filter-main-container"
                style={{ marginTop: '10px' }}
              >
                <div className="character-filter-container">
                  <div className="character-filter-column-left">
                    <div className="character-filter-box">
                      <label className="character-filter-label">템렙</label>
                      <input
                        type="text"
                        className="character-filter-input"
                        placeholder="입력"
                        name="itemLevel"
                        value={filters.itemLevel}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="character-filter-box">
                      <label className="character-filter-label">칭호</label>
                      <select
                        className="character-filter-dropdown"
                        name="title"
                        value={filters.title}
                        onChange={handleFilterChange}
                      >
                        <option value="">선택해주세요</option>
                        {titles.map(title => (
                          <option value={title} key={title}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="character-filter-box">
                      <label className="character-filter-label">카드</label>
                      <select
                        className="character-filter-dropdown"
                        name="card"
                        value={filters.card}
                        onChange={handleFilterChange}
                      >
                        <option value="">선택해주세요</option>
                        {cards.map(card => (
                          <option value={card} key={card}>
                            {card}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="character-filter-box">
                      <label className="character-filter-label">각성</label>
                      <select
                        className="character-filter-dropdown"
                        name="awakening"
                        value={filters.awakening}
                        onChange={handleFilterChange}
                      >
                        <option value="">선택해주세요</option>
                        <option value={18}>18</option>
                        <option value={24}>24</option>
                        <option value={30}>30</option>
                      </select>
                    </div>
                    <div className="character-filter-box">
                      <label className="character-filter-label">분위기</label>
                      <select
                        className="character-filter-dropdown"
                        name="enviornment"
                        value={filters.enviornment}
                        onChange={handleFilterChange}
                      >
                        <option value="">선택해주세요</option>
                        <option value={0}>상관없음</option>
                        <option value={1}>예민x</option>
                        <option value={2}>예민max</option>
                      </select>
                    </div>
                    <div className="custom-checkbox-container">
                      <div>
                        <input
                          type="checkbox"
                          name="lastSupporter"
                          id="lastSupporter"
                          value={filters.lastSupporter}
                          checked={filters.lastSupporter}
                          onChange={handleFilterChange}
                        />
                        <label htmlFor="lastSupporter">랏폿</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="lastDealer"
                          id="lastDealer"
                          value={filters.lastDealer}
                          checked={filters.lastDealer}
                          onChange={handleFilterChange}
                        />
                        <label htmlFor="lastDealer">랏딜</label>
                      </div>
                    </div>
                  </div>
                  <div className="character-filter-column-right">
                    <div className="character-filter-box">
                      <label className="character-filter-label">진화</label>
                      <input
                        type="text"
                        className="character-filter-input"
                        placeholder="입력"
                        name="evolution"
                        value={filters.evolution}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="character-filter-box">
                      <label className="character-filter-label">깨달음</label>
                      <input
                        type="text"
                        className="character-filter-input"
                        placeholder="입력"
                        name="enlightenment"
                        value={filters.enlightenment}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="character-filter-box">
                      <label className="character-filter-label">도약</label>
                      <input
                        type="text"
                        className="character-filter-input"
                        placeholder="입력"
                        name="leap"
                        value={filters.leap}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <label className="transcendence-label">초월</label>
                    <div className="character-filter-box">
                      <label className="character-filter-label">무기</label>
                      <select
                        className="character-filter-dropdown"
                        name="transcendenceWeapon"
                        value={filters.transcendenceWeapon}
                        onChange={handleFilterChange}
                      >
                        <option value="">선택해주세요</option>
                        <option value={0}>0</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                      </select>
                    </div>
                    <div className="character-filter-box">
                      <label className="character-filter-label">방어구</label>
                      <select
                        className="character-filter-dropdown"
                        name="transcendenceArmor"
                        value={filters.transcendenceArmor}
                        onChange={handleFilterChange}
                      >
                        <option value=" ">선택해주세요</option>
                        <option value={0}>0</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                        <option value={105}>105</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="party-info-modal-last-row">
          <button className="last-row-button" onClick={onClose}>
            취소
          </button>
          <button
            className="last-row-button"
            onClick={() => {
              createParty();
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakePartyModal;
