import React, { useState } from "react";
import './MyPartyPage.css'
import UserInfoComponent from '../components/UserInfoComponent.jsx'
import { ReactComponent as SendChattingButton } from '../assets/images/SendChattingButton.svg';
import PartyInfoModal from '../components/PartyInfoModal.jsx';

const MyPartyPage = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

const closeModal = () => {
    return setIsModalOpen(!isModalOpen);
}


const PartyData =
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
        {
            nickname: "닉네임1",
            level: "1560",
            class: "데모닉",
            classIcon:""
        },
        {
            nickname: "닉네임2",
            level: "1560",
            class: "창술사",
            classIcon:""
        },
        {
            nickname: "닉네임3",
            level: "1560",
            class: "블레이드",
            classIcon:""
        },
        {
            nickname: "닉네임4",
            level: "1560",
            class: "건슬링어",
            classIcon:""
        },
        {
            nickname: "닉네임5",
            level: "1560",
            class: "홀리나이트",
            classIcon:""
        },
        {
            nickname: "닉네임6",
            level: "1560",
            class: "디스트로이어",
            classIcon:""
        },
        {
            nickname: "닉네임7",
            level: "1560",
            class: "아르카나",
            classIcon:""
        }
        ]
    }

    const WaittingData = [
        {
            nickname: "닉네임1",
            level: "1560",
            class: "데모닉",
            classIcon:""
        },
        {
            nickname: "닉네임2",
            level: "1560",
            class: "창술사",
            classIcon:""
        },
        {
            nickname: "닉네임3",
            level: "1560",
            class: "블레이드",
            classIcon:""
        },
        {
            nickname: "닉네임4",
            level: "1560",
            class: "건슬링어",
            classIcon:""
        }
        ]

    const totalParties = Math.ceil(PartyData.maxmember / 4);
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


  return (
    <div className='main-Container'>
        <div className="content-Wrapper">
            <div className="ad-Container">ad-Container</div>
            <div className='my-party-container'>
                <div className='my-party-party-container'>
                    <div className='my-party-party-name'>
                        <div className='my-party-name-time'>
                            <div style={{color:'#6B83E1', marginBottom:'6px', fontSize:'20px'}}>방 제목</div>
                            <div style={{color:'#DFDFDF'}}>출발 시간</div>
                        </div>
                        <div className='my-party-moreinfo-button-container'>
                            <div className='my-party-moreinfo-button' onClick={()=>setIsModalOpen(!isModalOpen)}>방 정보 상세보기</div>
                        </div>
                    </div>
                    <div className='my-party-participant'>
                        <div className='my-party-member'>    
                            {groupedMembers.map((group,groupIdx)=>(
                                <div style={{height:'98px'}} key={groupIdx}>
                                    <div className='party-number-title'>
                                        파티 0{groupIdx+1}
                                        <div className='party-member-container'>
                                            {group.map((member,idx) =>(
                                                <div key={idx}>
                                                    {member ?
                                                    <div className='party-memeber-info'>
                                                        <UserInfoComponent userInfo = {member}/>
                                                        <div className='kick-button-container'>
                                                            <div className='kick-button'>추방</div>
                                                        </div>
                                                    </div>
                                                    : 
                                                    <div className="nickname party-memeber-info">빈 슬롯</div>
                                                }
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='my-party-others-container'>
                    <div className='my-party-chatting-container'>
                        <div className='my-party-chatting-box'>

                        </div>
                        <div className='my-party-chatting-input-cotainer'>
                            <input type='text' placeholder='내용을 입력해주세요.' className='my-party-chatting-input'/>
                            <button className='my-party-chatting-button' onClick={()=>console.log('sex')}><SendChattingButton style={{width:'24px', height:'24px'}}/></button>
                        </div>
                    </div>
                    <div className='my-party-waitting-list'>
                        <div className='my-party-waitting-container'>
                            {WaittingData.map((user,idx) => (
                                <div className='my-party-waitting-row' key={idx}>
                                    <UserInfoComponent userInfo = {user}/>
                                    <div className='my-party-waitting-button-row'>
                                        <div className='kick-button2'>추방</div>
                                        <div className='accept-button'>수락</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='my-party-waitting-extra-button-row'>
                            <div className='my-party-waitting-extra-button'>알람 보내기</div>
                            <div className='my-party-waitting-extra-button'>마감</div>
                            <div className='my-party-waitting-extra-button'>나가기</div>
                        </div>
                    </div>
                </div>
            </div>
            <PartyInfoModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    </div>
  )
}

export default MyPartyPage;