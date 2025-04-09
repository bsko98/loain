import React from 'react'
import { useLocation } from 'react-router-dom';
import FindId from '../pages/Findid';
import ResetPassword from '../pages/Resetpassword';
import SignUp from '../pages/Signup';


const RouteModalPage = () => {

    const location = useLocation();
    
    return (
    <div className='main-Container'>
        <div className="content-Wrapper">
            {location.pathname === "/findId" && <FindId/>}
            {location.pathname === "/signUp" && <SignUp/>}
            {location.pathname === "/resetPassword" && <ResetPassword/>}
        </div>
    </div>
    )
}

export default RouteModalPage