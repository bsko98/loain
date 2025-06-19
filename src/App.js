import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Sidebar from './components/sidebar';
import ManageMyCharacter from './pages/ManageMyCharacter';
import MyPartyPage from './pages/MyPartyPage.jsx';
import { MyDataFactory } from './factoris/myDataFactory.js';
import { PartyFactory } from './factoris/partyFactory.js';
import { CredentialFactory } from './factoris/credentialFactory.js';
import Notification from './notification/notificationComponent.jsx';
import { socketManager } from './socket/socket.js';
import { setEventHandlers } from './socket/eventHandlers.js';

function App() {
  const [myData, setMyData] = useState(MyDataFactory.create())
  const [partyList, setPartyList] = useState([])
  const [myParty, setMyarty] = useState(PartyFactory.create())
  const [credential, setCredential] = useState(CredentialFactory.create())
  const [chatList, setChatList] = useState([])


  const state = {
    myData: myData,
    setMyData: setMyData,
    partyList: partyList,
    setPartyList: setPartyList,
    myParty: myParty,
    setMyarty: setMyarty,
    credential: credential,
    setCredential: setCredential,
    chatList: chatList,
    setChatList: setChatList
  }
  socketManager.setHandlers(setEventHandlers(state))
  myData.characters = [{
      characterId: "bskoId",
      name: "bsko",
      serverName: "아만",
      job: "블레이드",
      imageUrl: "https://img.lostark.co.kr/armory/3/F4201758FCE4C335A1A8A3BAC13AF299E581F48918866FB4BCFF636CC6E204CF.jpg?v=20250407150402",
      itemLevel: 1500,
      arkPassive: {
          evolution: 10,
          enlightenment: 15,
          leap: 20,
      },
      transcend: {
        weapon: 20,
        armor: 100
      },
      titles: ["이클립스"],
      cards: [{
        name: "세상을 구하는 빛",
        awakening: 35
      }],
  }, {
      characterId: "bskoId2",
      name: "bsko2",
      serverName: "아만2",
      job: "블레이드2",
      imageUrl: "https://img.lostark.co.kr/armory/3/F4201758FCE4C335A1A8A3BAC13AF299E581F48918866FB4BCFF636CC6E204CF.jpg?v=20250407150402",
      itemLevel: 15002,
      arkPassive: {
          evolution: 10,
          enlightenment: 10,
          leap: 10,
      },
      transcend: {
        weapon: 0,
        armor: 0
      },
      titles: ["이클립스2"],
      cards: [{
        name: "세상을 구하는 빛",
        awakening: 0
      }],
  }
  ]

  return (
    <div className="App">
      <Notification />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage state={state}/>} />
          <Route path="/manageMyCharacter" element={<ManageMyCharacter state={state} />} />
          <Route path="/myParty" element={<MyPartyPage />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
