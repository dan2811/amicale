import React from 'react';
import styled from 'styled-components';
import HeaderBar from './headerbar';
import NavBar from './navbar';
import Slideshow from './slideshow';

const Wrapper = styled.div`
    font-family: 'Architects Daughter', cursive;
`;

const Home = () => {
  return (
    <Wrapper>
        <HeaderBar />
        <NavBar />
        <Slideshow />
    </Wrapper>
  )
}

export default Home