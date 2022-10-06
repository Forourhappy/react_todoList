import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Main = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState(true);

  const goToMypage = () => {
    // login 상태면 mypage로 이동, 그렇지 않으면 about으로 이동
    userState === true ? navigate('/mypage') : navigate('/about');
  }

  return (
    <div>Main
      <br></br>
      {/* Link Component
      - 브라우저 주소를 바꿔주는 역할
      - 실제로 페이지를 불러오지는 않는다 (a태그와의 차이) */}
      <Link to='./about'>어바웃으로 이동</Link>
      <br/>
      <Link to='./product'>상품페이지 링크</Link>
      <br/>
      <button onClick={goToMypage}>마이페이지로 이동</button>
      
    </div>
  )
}

export default Main;