import React from 'react'
import './MyPartyPage.css'

const MyPartyPage = () => {
  return (
    <div className='main-Container'>
        <div className="content-Wrapper">
            <div className="ad-Container">ad-Container</div>
            <div className='my-party-container'>
                <div className='my-party-party-container'>
                    <div className='my-party-party-name'></div>
                    <div className='my-party-participant'></div>
                </div>
                <div className='my-party-others-container'>
                    <div className='my-party-chatting-container'></div>
                    <div className='my-party-waitting-list'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPartyPage;