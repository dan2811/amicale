import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import SkypeIcon from '../assets/skype_icon.png';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Wrapper = styled.div`

`;

const Bar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    min-height: 5vh;
    background-color: midnightblue;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 20px black;
`;

const Barright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
`;

const Barleft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
`;

const Info = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 3rem;
`;

const Phone = styled(PhoneIcon)`
    padding-right: 1rem;
`;

const Email = styled(EmailIcon)`
    padding-right: 1rem;
`;

const StyledImg = styled.img`
    width: 1.8rem;
    padding-right: 1rem;
`;

// const Barcenter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.h1`
//   color: white;
//   font-weight: 300;
//   text-transform: capitalize;
// `;

const HeaderBar = () => {
  return (
    <Wrapper>
        <Bar>
            <Barleft>
                <Info>
                    <Phone /> 07816 936723
                </Info>
                <Info>
                    <StyledImg src={SkypeIcon} alt="Skype"/>
                    amicale_tutoring
                </Info>
                <Info>
                    <Email />
                    enquiries@amicale.co.uk
                </Info>

            </Barleft>
            <Barright>
                <Info>
                    <FacebookIcon />
                </Info>
                <Info>
                    <TwitterIcon />
                </Info>
                <Info>
                    <InstagramIcon />
                </Info>
            </Barright>
        </Bar>
    </Wrapper>
  )
}

export default HeaderBar