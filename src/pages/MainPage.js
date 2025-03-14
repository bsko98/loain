import React , {useState} from 'react';
import './MainPage.css';
import Sidebar from '../components/sidebar';

const MainPage = () => {
    return (
      <div>
        <div className="main-Container">
          {/* <div className="side-Menu-Container">
          </div> */}
          <div className="content-Wrapper">
            <div className="ad-Container">ad-Container</div>
            <div className="character-Select-Container">character-select-Container</div>
            <div className="main-Content">
              <div className="left-Column">
                <div className="character-Container">character-Container</div>
                <div className="arkPassive-Container">arkpassive-Container</div>
                <div className="title-Container">title-Container</div>
              </div>
              <div className="right-Column">
                <div className="search-Container">search-Container</div>
                <div className="filter-Container">filter-Container</div>
                <div className="party-Container">party-Container</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}

export default MainPage