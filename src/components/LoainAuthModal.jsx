import React, {useState} from 'react'
import './LoainAuthModal.css'
import { ReactComponent as LoainLogo } from '../assets/images/LoainLogoImage.svg';
import { ReactComponent as LoainText } from '../assets/images/LoainTextImage.svg';
import { ReactComponent as APIKeyImage } from '../assets/images/APIKeyImage.svg';
import { ReactComponent as QuestionMarkImage } from '../assets/images/QuestionMarkImage.svg';

const LoainAuthModal = () => {

  const [type,setType] = useState(true);
  const randomString = 'seeex'
  const webType = [
    "1. 인증코드 : {randomString}(클릭하여 복사)",
    "2. 스토브 프로그램(런처) 실행 후 로그인",
    "3. 상단의 닉네임을 클릭해 드롭다운 펼치기",
    "4. 드롭다운 메뉴의 닉네임을 클릭해 프로필 페이지로 이동",
    "5. 프로필 페이지 상단 배너 우측의 톱니바퀴를 클릭",
    "6. 소개글 입력란에 복사한 인증코드 붙여넣기 후 변경 버튼을 클릭해 저장",
    "7. 상단의 '내 MY홈 가기' 버튼 클릭하여 프로필 페이지로 이동",
    "8. 인증 페이지로 돌아와 복사한 주소(URL)를 붙여넣은 후 인증 진행"
  ]

  const clientType = [
    "1. 인증코드 : {randomString}(클릭하여 복사)",
    "2. 스토브 홈페이지 접속 후 로그인",
    "3. 우측 상단의 프로필 아이콘을 클릭해 드롭다운 펼치기",
    "4. 드롭다운 메뉴의 닉네임을 클릭해 프로필 페이지로 이동",
    "5. 프로필 페이지 상단 배너 우측의 톱니바퀴를 클릭",
    "6. 소개글 입력란에 복사한 인증코드 붙여넣기 후 변경 버튼을 클릭해 저장",
    "7. 상단의 '내 MY홈 가기' 버튼 클릭하여 프로필 페이지로 이동",
    "8. 인증 페이지로 돌아와 복사한 주소(URL)를 붙여넣은 후 인증 진행"
  ]

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(randomString)
      .then(() => alert("클립보드에 복사되었습니다!"))
      .catch(() => alert("클립보드 복사에 실패했습니다."));
  };




  return (
    <div className='filter-modal-overlay'>
        <div className='loain-auth-modal-container'> 
            <div className='loain-auth-modal-box'>
                <div className='logoposaccount-container'>
                    <LoainLogo /> { }
                    <LoainText /> { }
                </div>
                <div className='loain-auth-first-row'>
                  <div className='loain-auth-text-row'>
                    <APIKeyImage style={{ width: '18px', height: '18px', marginRight:'8px'}} />
                    <span className='loain-auth-title'>로아인 인증 과정 설명</span>
                  </div>
                    <div style={{ width: '18px', height: '18px' }}>
                        <QuestionMarkImage style={{ width: '18px', height: '18px' }} />
                    </div>
                </div>
                <div className='loain-auth-second-row'>
                  <div className={type ? 'loain-auth-second-row-state-active' :'loain-auth-second-row-state'} onClick={()=>setType(!type)}>브라우저 기준</div>
                  <div className={type ? 'loain-auth-second-row-state' :'loain-auth-second-row-state-active'} onClick={()=>setType(!type)}>스토브 런처 기준</div>
                </div>
                <div className='loain-auth-content-container'>
                  <div className='loain-auth-content-box'>
                  {type ? webType.map((data,index) =>{
                    const parts = data.split("{randomString}");
                    return(
                    <span key={index} className='loain-auth-info-txt'>
                      {parts[0]}
                      {index === 0 && 
                        <span 
                          style={{color:'blue'}}
                          onClick={handleCopyToClipboard}
                        >
                          &nbsp; {randomString}&nbsp; 
                        </span>
                      }
                      {parts[1]}
                    </span>)
                  }) : clientType.map((data,index) =>{
                    const parts = data.split("{randomString}");
                    return(
                    <span key={index} className='loain-auth-info-txt'>
                      {parts[0]}
                      {index === 0 && 
                        <span 
                          style={{color:'blue'}}
                          onClick={handleCopyToClipboard}
                        >
                          &nbsp; {randomString}&nbsp; 
                        </span>
                      }
                      {parts[1]}
                    </span>)
                  })
                  }
                  <input className='loain-auto-content-input' placeholder='프로필 페이지 주소(URL)를 입력해주세요.'/> 
                  </div>
                </div>
                <div style={{marginTop:'11px'}}>
                  <button className='loain-auth-btn'>인증하기</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoainAuthModal