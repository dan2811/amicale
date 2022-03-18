import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: absolute;
    left: 0;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition : all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
`;

const Image = styled.img`
width: 100vw;
z-index: -1;
`;

const Title = styled.h1`
position: absolute;
font-size: 70px;
z-index: 5;
`;

const Desc = styled.p`
/* margin: 50px 0px; */
position: absolute;
margin-top: 10rem;
font-size: 20px;
font-weight: 500;
letter-spacing: 2px;`;


const sliderItems = [
    '/assets/slideshowImages/slider-img-1-1024x683.jpg',
    '/assets/slideshowImages/slider-img-2-1024x683.jpg',
    '/assets/slideshowImages/slider-img-3-1024x683.jpg',
    '/assets/slideshowImages/slider-img-4-1024x683.jpg'
];


const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map((path, idx)=>(
                <Slide key={`sliderImage${idx}`}>  
                <ImgContainer>
                    <Image src={path}/>
                    <Title>
                        We do tutoring the right way!
                    </Title>
                    <Desc>
                        Amicale
                    </Desc>
                </ImgContainer>
                {/* <InfoContainer>
                    <Title>
                    We do tutoring the right way!
                    </Title>
                    <Desc>
                        
                    </Desc>
                </InfoContainer> */}
                </Slide>
                ))}

            </Wrapper>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slideshow