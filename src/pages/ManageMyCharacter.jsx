import React from 'react'
import './ManageMyCharacter.css'
import { ReactComponent as AddButton } from '../assets/images/addButton.svg';
import MyCharacterModal from '../components/myCharacterModal'

            //FIXME - 피그마 그대로 사이즈를 맞추는데 뭔가 안 맞는거같음
const ManageMyCharacter = () => {
  return (
    <div className='main-Container'>
        <div className="content-Wrapper">
            <div className="ad-Container">ad-Container</div>
            <MyCharacterModal/>
        </div>
    </div>
  )
}

export default ManageMyCharacter