// src/contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

// AuthContext 생성
const AuthContext = createContext(null);

// AuthProvider 컴포넌트 생성
export const AuthProvider = ({ children }) => {
  // 사용자 정보와 인증 상태를 관리할 상태
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // 컴포넌트 마운트 시 로컬 스토리지에서 사용자 정보 불러오기
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // 로그인 함수
  const login = (userData) => {
    // 실제 환경에서는 API 호출 후 응답을 처리합니다
    setCurrentUser(userData);
    // 로컬 스토리지에 사용자 정보 저장
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  // 로그아웃 함수
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  // 사용자 정보 업데이트 함수
  const updateUserInfo = (updatedInfo) => {
    const updatedUser = { ...currentUser, ...updatedInfo };
    setCurrentUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // Context를 통해 제공할 값들
  const value = {
    currentUser,
    loading,
    login,
    logout,
    updateUserInfo,
    isAuthenticated: !!currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 커스텀 훅으로 쉬운 사용을 위한 함수
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;