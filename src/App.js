import './App.css';
// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Sidebar from './components/sidebar';
import ManageMyCharacter from './pages/ManageMyCharacter';
import MyPartyPage from './pages/MyPartyPage.jsx';
import SignIn from './pages/Signin';
import FindId from './pages/Findid';
import ResetPassword from './pages/Resetpassword';
import SignUp from './pages/Signup';
import ManageMyAccountModal from './components/ManageMyAccountModal.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manageMyCharacter" element={<ManageMyCharacter />} />
          <Route path="/myParty" element={<MyPartyPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/findId" element={<FindId />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/manageMyAccount" element={<ManageMyAccountModal/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
