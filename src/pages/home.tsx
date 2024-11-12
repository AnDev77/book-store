import React from 'react'
import Header from '../components/common/Header';
import { formatNumber } from '../utils/format';
import Footer from '../components/common/Footer';
import SideBar from '../components/common/SideBar';
import Button from '../components/common/Button';
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';

const Home = () => {
  return (
    <div>
        <Title size ="medium" color="background">
          제목테스트
        </Title>
        <Button size="large" scheme="primary"> 버튼테스트</Button>
        <InputText placeholder = "여기에 입력하세요"/>
    </div>
  )
}

export default Home;
