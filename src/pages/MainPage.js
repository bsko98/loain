import React , {useState} from 'react';
import './MainPage.css';
import CharacterSelectContainer from '../components/CharacterSelectContainer';
import PartyTitleSearchbar from '../components/PartyTitleSearchbar';

const MainPage = () => {
    return (
        <div className="main-Container">
          <div className="side-Menu-Container">sideMenu</div>
          <div className="content-Wrapper">
            <div className="ad-Container">ad-Container</div>
            <div className="character-Select-Container"><CharacterSelectContainer></CharacterSelectContainer></div>
            <div className="main-Content">
              <div className="left-Column">
                <div className="character-Container">character-Container</div>
                <div className="arkPassive-Container">arkpassive-Container</div>
                <div className="card-Container">card-Container</div>
                <div className="title-Container">title-Container</div>
              </div>
              <div className="right-Column">
                <div className="right-Container">
                  <div className="right-Top-Container">
                    <PartyTitleSearchbar></PartyTitleSearchbar>
                    <div className="filter-Container">filter-Container</div>
                  </div>
                </div>
                <div className="party-Container">party-Container</div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default MainPage