import React from 'react'
import './ManageMyCharacter.css'
// import { ReactComponent as AddButton } from '../assets/images/addButton.svg';
import MyCharacterModal from '../components/myCharacterModal'

const ManageMyCharacter = ({state}) => {
  return (
    <div className='main-Container'>
        <div className="content-Wrapper">
            <div className="ad-Container">ad-Container</div>
            <MyCharacterModal state={state}/>
        </div>
    </div>
  )
}

export default ManageMyCharacter