import React from 'react';

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slider1 from '../../images/slider1-1.jpg';
import slider2 from '../../images/slider2-2.jpg';
import slider3 from '../../images/slider3.jpg';
import BannerBtn from './BannerBtn';





const ImgSlider = (props) => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        cssEase: 'ease-in-out',
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,


    };

    return (
        <CarouselWrapper>
            <BannerBtn />
            <Carousel {...settings} >

                <Wrap>
                    <ImgHolder><ShaderBox></ShaderBox>
                        <Img src={slider3} />

                    </ImgHolder>
                </Wrap>
                <Wrap>
                    <ImgHolder><ShaderBox></ShaderBox>
                        <Img src={slider2} />
                    </ImgHolder>
                </Wrap>
                <Wrap>
                    <ImgHolder><ShaderBox></ShaderBox>
                        <Img src={slider1} />
                    </ImgHolder>
                </Wrap>








            </Carousel>
        </CarouselWrapper>
    )
}

const CarouselWrapper = styled.div`
width: 100vw;
height:100vh;
position: absolute;



`;


const Carousel = styled(Slider)`
margin-top:0px;

position: relative;




`;

const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;
margin-bottom: 20px;

@media screen and(max-width: 500px){
        
            height:100%;
            width:100%;
        }



    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }

`;



const ImgHolder = styled.div`

border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    
    height:100%;
`;

const Img = styled.img`

        width: 100%;
        height:100%;
        object-fit: cover;
z-index:-1;
        animation: imgscale 80s infinite ease-in-out;
        

        @keyframes imgscale{
        0%{
            transform: scale(1)
        }  
       
        100%{
            transform:scale(1.7);
        }
        }

        @media screen and (min-width:768px){

            height:100vh;

        }


@media screen and (max-width:768px){
    
    height:70vh;
    animation: none;
}

`;

const ShaderBox = styled.div`
width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  z-index: 3;
  padding-bottom: 10%;



`;



export default ImgSlider;


