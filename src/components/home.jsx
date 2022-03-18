import React from 'react';
import styled from 'styled-components';
import HeaderBar from './headerbar';
import NavBar from './navbar';

const Wrapper = styled.div`
    font-family: 'Architects Daughter', cursive;
`;

const Home = () => {
  return (
    <Wrapper>
        <HeaderBar />
        <NavBar />
    </Wrapper>
  )
}

export default Home