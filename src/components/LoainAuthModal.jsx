import React, {useState} from 'react'
import './LoainAuthModal.css'
import { ReactComponent as LoainLogo } from '../assets/images/LoainLogoImage.svg';
import { ReactComponent as LoainText } from '../assets/images/LoainTextImage.svg';
import { ReactComponent as APIKeyImage } from '../assets/images/APIKeyImage.svg';
import { ReactComponent as QuestionMarkImage } from '../assets/images/QuestionMarkImage.svg';

const LoainAuthModal = () => {

  const [type,setType] = useState(true);


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
                    <span className='ss'>로아인 인증 과정 설명</span>
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