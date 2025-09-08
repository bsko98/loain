import axios from 'axios';
import { socketManager } from '../socket/socket';
import { ACCOUNT_API_PATHS, MAIN_API_PATHS } from '../configs/apiPaths';

export const signIn = setIsLoggedIn => {
  const accessKey = sessionStorage.getItem('accessKey');
  if (!accessKey) return { success: false, message: '문제가 발생 했습니다.' };
  try {
    socketManager.setAccessKey(accessKey);
    socketManager.connect(process.env.REACT_APP_MAIN_SERVER);
    setIsLoggedIn(true);
    return { success: true };
  } catch (e) {
    console.log(`connectSocketService Error: ${e}`);
    return { success: false, message: '문제가 발생 했습니다.' };
  }
};

export const signUpService = async (
  username,
  password,
  apiKey,
  stoveId,
  key,
  setIsLoggedIn
) => {
  try {
    key = '12345';
    const response = await axios.post(
      `${process.env.REACT_APP_MAIN_API_SERVER}${MAIN_API_PATHS.USERS.SIGNUP}`,
      {
        username: username,
        password: password,
        //apiKey: apiKey,
        stoveId: stoveId,
        key: key,
      }
    );
    console.log(response);
    sessionStorage.setItem('accessKey', response.data.credentials.access);
    sessionStorage.setItem('refreshKey', response.data.credentials.refresh);
    signIn(setIsLoggedIn);
  } catch (e) {
    sessionStorage.removeItem('accessKey');
    sessionStorage.removeItem('refreshKey');
    alert(`문제가 발생 했습니다.`);
    console.log(`signUPService Error: ${e}`);
  }
};

export const signInService = async (username, password, setIsLoggedIn) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_ACCOUNT_SERVER}${ACCOUNT_API_PATHS.MEMBERS.SIGNIN}`,
      {
        username: username,
        password: password,
      }
    );
    console.log('signInService');
    console.log(response);
    sessionStorage.setItem('accessKey', response.data.credentials.access);
    sessionStorage.setItem('refreshKey', response.data.credentials.refresh);
    const signInResult = signIn(setIsLoggedIn);
    if (signInResult.success === false)
      return { success: false, message: signInResult.message };
    return { success: true };
  } catch (e) {
    sessionStorage.removeItem('accessKey');
    sessionStorage.removeItem('refreshKey');
    //alert(`문제가 발생 했습니다.`);
    console.log(`signUPService Error: ${e}`);
    return { success: false, message: '문제가 발생 했습니다.' };
  }
};
