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

function App() {
  const [myData, setMyData] = useState(MyDataFactory.create())
  const [partyList, setPartyList] = useState([])
  const [myParty, setMyarty] = useState(PartyFactory.create())
  const [credential, setCredential] = useState(CredentialFactory.create())
  const [chatList, setChatList] = useState([])
  return (
    <div className="App">
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
