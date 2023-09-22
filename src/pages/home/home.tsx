import React from 'react'
import Login from '../../components/login/login';
import { Container } from './styles';
import MyHeader from '../../components/header/header';


const Home:React.FC = () => {
  return (
    <>
    <MyHeader />
      <Container>
          <Login />
      </Container>
    </>
  )
}

export default Home;
