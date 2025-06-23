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

  state.partyList =[
    {
      partyId: "partyId",
      title: "party title",
      boss: "commander_1",
      difficulty: 1,
      partyFilter: {
        startGate: 1,
        endGate: 3,
        startTime: 0,
        startMastery: 0,
        endMastery: 1,
        itemLevel: 1600,
        arkPassive: {
          evolution: 10,
          enlightenment: 15,
          leap: 20,
        },
        transcend: {
          weapon: 10,
          armor: 20
        },
        title: ["commander_valtan_1"],
        card: [{
          name: "Dealer_1",
          awakening: 30
        }],
        lastSupporter: true,
        lastDealer: true,
      },
      leader:{
        characterId: "bskoId123",
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
      },
      partyMembers: [
      {
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
      }, null, null, null,
        null, null, null, null,
      ],
      allow: undefined,
      volunteers: undefined,
    },
    {
      partyId: "partyId2",
      title: "party title2",
      boss: "commander_2",
      difficulty: 0,
      partyFilter: {
        startGate: 1,
        endGate: 2,
        startTime: 0,
        startMastery: 2,
        endMastery: 5,
        itemLevel: 1600,
        arkPassive: {
          evolution: 10,
          enlightenment: 15,
          leap: 20,
        },
        transcend: {
          weapon: 10,
          armor: 20
        },
        title: ["commander_valtan_1"],
        card: [{
          name: "Dealer_1",
          awakening: 30
        }],
        lastSupporter: true,
        lastDealer: false,
      },
      leader:{
        characterId: "bskoId321",
        name: "bsko123",
        serverName: "루페온",
        job: "스카우터",
        imageUrl: "https://img.lostark.co.kr/armory/3/F4201758FCE4C335A1A8A3BAC13AF299E581F48918866FB4BCFF636CC6E204CF.jpg?v=20250407150402",
        itemLevel: 1600,
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
      },
      partyMembers: [
      {
        characterId: "bskoId321",
        name: "bsko123",
        serverName: "루페온",
        job: "스카우터",
        imageUrl: "https://img.lostark.co.kr/armory/3/F4201758FCE4C335A1A8A3BAC13AF299E581F48918866FB4BCFF636CC6E204CF.jpg?v=20250407150402",
        itemLevel: 1600,
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
      }, null, null, null,
        null, null, null, null,
      ],
      allow: undefined,
      volunteers: undefined,
    },
  ]

  state.myParty = {
    partyId: "partyId",
    title: "party title",
    boss: "commander_1",
    difficulty: 0,
    partyFilter: {
      startGate: 1,
      endGate: 2,
      startTime: 1,
      startMastery: 2,
      endMastery: 4,
      itemLevel: 1600,
      arkPassive: {
        evolution: 10,
        enlightenment: 15,
        leap: 20,
      },
      transcend: {
        weapon: 10,
        armor: 20
      },
      title: ["commander_valtan_1"],
      card: [{
        name: "Dealer_1",
        awakening: 30
      }],
      lastSupporter: true,
      lastDealer: false,
    },
    leader:{
      characterId: "bskoId123",
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
    },
    partyMembers: [
    {
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
    }, null, null, null,
      null, null, null, null,
    ],
    allow: true,
    volunteers: [{
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
    }]
  }

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
          <Route path="/myParty" element={<MyPartyPage state={state}/>} />
        </Routes>
        <Sidebar state={state}/>
      </Router>
    </div>
  );
}

export default App;
