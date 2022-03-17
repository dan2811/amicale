import React from 'react';
import styled from 'styled-components';
import HeaderBar from './headerbar';

const Wrapper = styled.div`
    font-family: 'Architects Daughter', cursive;
`;

const Home = () => {
  return (
    <Wrapper>
        <HeaderBar />
    </Wrapper>
  )
}

export default Home