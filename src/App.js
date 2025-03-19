import './App.css';
// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Sidebar from './components/sidebar';
import ManageMyCharacter from './pages/ManageMyCharacter';
import MyPartyPage from './pages/MyPartyPage.jsx';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manageMyCharacter" element={<ManageMyCharacter />} />
          <Route path="/myParty" element={<MyPartyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
