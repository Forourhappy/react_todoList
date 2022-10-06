import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const toMain = () => {
    navigate('/');
  }
  return (
    <div>
      <h3>유저 정보입니다.</h3>
      <button onClick={toMain}>메인으로 돌아가기</button>

    </div>
  )
}

export default MyPage;