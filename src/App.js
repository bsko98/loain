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

  return (
    <div className="App">
      <Notification />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manageMyCharacter" element={<ManageMyCharacter />} />
          <Route path="/myParty" element={<MyPartyPage />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
