import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';

const Wrapper = styled.div`

`;

const Bar = styled.div`
    position: absolute;
    top: 5vh;
    left: 0;
    z-index: 99;
    width: 100vw;
    min-height: 5vh;
    background-color: white;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 20px black;
`;

const Barright = styled.div`
  flex: 7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 2rem;
`;

const Barleft = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
`;

const MenuItem = styled(Link)`
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.5rem;
`;

// const Barcenter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Title = styled.h1`
  color: black;
  font-weight: 900;
  font-size: 5rem;
  padding: 0;
  margin: 0;
`;

const NavBar = () => {
  return (
    <Wrapper>
        <Bar>
            <Barleft>
              <Title>
                Amicale
              </Title>
            </Barleft>
            <Barright>
              <MenuItem to="/">Home</MenuItem>
              <MenuItem to="/">Mission</MenuItem>
              <MenuItem to="/">What We Do</MenuItem>
              <MenuItem to="/">Our Tutors</MenuItem>
              <MenuItem to="/">Contact</MenuItem>
              <MenuItem to="/">
                <MenuIcon>
                  <SchoolIcon />
                </MenuIcon>
                Book a Lesson
              </MenuItem>
              <MenuItem to="/">
                <MenuIcon>
                  <ShoppingCartIcon />
                </MenuIcon>
                Cart
              </MenuItem>
            </Barright>
        </Bar>
    </Wrapper>
  )
}

export default NavBar