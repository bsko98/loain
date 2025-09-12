import React, { useState } from "react";
import "./MyPartyPage.css";
import UserInfoComponent from "../components/UserInfoComponent.jsx";
import { ReactComponent as SendChattingButton } from "../assets/images/SendChattingButton.svg";
import PartyInfoModal from "../components/PartyInfoModal.jsx";

const MyPartyPage = ({ state }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    return setIsModalOpen(!isModalOpen);
  };
  const PartyData = state.myParty;
  const partyFilter = PartyData.partyFilter;
  const totalParties = Math.ceil(PartyData.partyMembers.length / 4);
  const allMembers = PartyData.partyMembers || [];
  const groupedMembers = Array.from({ length: totalParties }, (_, groupIdx) => {
    const groupStart = groupIdx * 4;
    const group = allMembers.slice(groupStart, groupStart + 4);
    const filledGroup = [...group];
    while (filledGroup.length < 4) {
      filledGroup.push(null);
    }
    return filledGroup;
  });
  const time = new Date(partyFilter.startTime);
  const startTime = time.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // 24시간제
  });
  const openPartyInfoModal=()=>{
    if(state.myParty.leader.chooseCharacter.name === state.myData.userData.chooseCharacter.name){
      setIsModalOpen(!isModalOpen);
    }else{
      alert("파티장만 방 설정을 할 수 있습니다.");
    }
  }

  return (
    <div className="main-Container">
      <div className="content-Wrapper">
        <div className="ad-Container">ad-Container</div>
        <div className="my-party-container">
          <div className="my-party-party-container">
            <div className="my-party-party-name">
              <div className="my-party-name-time">
                <div
                  style={{
                    color: "#6B83E1",
                    marginBottom: "6px",
                    fontSize: "20px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {PartyData.title}
                </div>
                <div style={{ color: "#DFDFDF" }}>{startTime}</div>
              </div>

              <button
                className="my-party-moreinfo-button"
                onClick={() => openPartyInfoModal()}
              >
                방 정보 상세보기
              </button>
            </div>
            <div className="my-party-participant">
              <div className="my-party-member">
                {groupedMembers.map((group, groupIdx) => (
                  <div style={{ height: "98px" }} key={groupIdx}>
                    <div className="party-number-title">
                      파티 0{groupIdx + 1}
                      <div className="party-member-container">
                        {group.map((member, idx) => (
                          <div key={idx}>
                            {member ? (
                              <div className="party-memeber-info">
                                <UserInfoComponent
                                  userInfo={member.chooseCharacter}
                                />
                                <div className="kick-button-container">
                                  <button
                                    className="kick-button"
                                    onClick={() => console.log(state)}
                                  >
                                    추방
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="nickname party-memeber-info">
                                빈 슬롯
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-party-others-container">
            <div className="my-party-chatting-container">
              <div className="my-party-chatting-box"></div>
              <div className="my-party-chatting-input-cotainer">
                <input
                  type="text"
                  placeholder="내용을 입력해주세요."
                  className="my-party-chatting-input"
                />
                <button
                  className="my-party-chatting-button"
                  onClick={() => console.log("sex")}
                >
                  <SendChattingButton
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
              </div>
            </div>
            <div className="my-party-waitting-list">
              <div className="my-party-waitting-container">
                {state.myParty.volunteers.map((user, idx) => (
                  <div className="my-party-waitting-row" key={idx}>
                    <UserInfoComponent userInfo={user} />
                    <div className="my-party-waitting-button-row">
                      <div className="kick-button2">추방</div>
                      <div className="accept-button">수락</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-party-waitting-extra-button-row">
                <button
                  className="my-party-waitting-extra-button"
                  onClick={() => console.log(state.myParty)}
                >
                  알람 보내기
                </button>
                <button
                  className="my-party-waitting-extra-button"
                  onClick={() => console.log(allMembers)}
                >
                  마감
                </button>
                <button
                  className="my-party-waitting-extra-button"
                  onClick={() => console.log(PartyData)}
                >
                  나가기
                </button>
              </div>
            </div>
          </div>
        </div>
        <PartyInfoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          modalTitleText={"파티 상세정보"}
          buttonText={"저장"}
          state={state}
        />
      </div>
    </div>
  );
};

export default MyPartyPage;
