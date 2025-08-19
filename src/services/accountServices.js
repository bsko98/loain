
import axios from 'axios';
import { socketManager } from '../socket/socket';
import { MAIN_API_PATHS } from '../configs/apiPaths';

export const signIn = (setIsLoggedIn) => {
    const accessKey = sessionStorage.getItem("accessKey");
    if(!accessKey)
        return;

    try {
        socketManager.setAccessKey(accessKey);
        socketManager.connect(process.env.REACT_APP_MAIN_SERVER);
        setIsLoggedIn(true);
    } catch(e) {
        alert(`문제가 발생 했습니다.`);
        console.log(`connectSocketService Error: ${e}`);
    }
}

export const signUpService = async (username, password, apiKey, stoveId, key, setIsLoggedIn) => {
    try {
        key = '12345'
        const response = await axios.post(`${process.env.REACT_APP_MAIN_API_SERVER}${MAIN_API_PATHS.USERS.SIGNUP}`, {
            username: username,
            password: password,
            //apiKey: apiKey,
            stoveId: stoveId,
            key: key
        });
        console.log(response);
        sessionStorage.setItem("accessKey", response.data.credentials.access);
        sessionStorage.setItem("refreshKey", response.data.credentials.refresh);
        signIn(setIsLoggedIn);
    } catch(e) {
        sessionStorage.removeItem("accessKey");
        sessionStorage.removeItem("refreshKey");
        alert(`문제가 발생 했습니다.`);
        console.log(`signUPService Error: ${e}`);
    }
}