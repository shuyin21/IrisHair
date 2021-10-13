import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import slider1 from '../../images/sm1.jpg'
import slider2 from '../../images/sm2.jpg'
import slider3 from '../../images/sm3.jpg'
import slider4 from '../../images/sm4.jpg'
import slider5 from '../../images/sm5.jpg'
import slider6 from '../../images/slider1-1.jpg'

const Gallery = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    console.log(width);

    let settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "60px",


        autoplay: true,
        loop: true,


    };
    let settings2 = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "60px",


        autoplay: true,
        loop: true,


    };
    let mainSetting = '';
    if (width > 900) {
        mainSetting = settings;
    }
    else {
        mainSetting = settings2;
    }

    return (
        <>
            <MainDiv>
                <CarouselWrapper>

                    <Carousel   {...mainSetting}>

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
                        <Wrap>
                            <ImgHolder><ShaderBox></ShaderBox>
                                <Img src={slider4} />
                            </ImgHolder>
                        </Wrap>
                        <Wrap>
                            <ImgHolder><ShaderBox></ShaderBox>
                                <Img src={slider5} />
                            </ImgHolder>
                        </Wrap>
                        <Wrap>
                            <ImgHolder><ShaderBox></ShaderBox>
                                <Img src={slider6} />
                            </ImgHolder>
                        </Wrap>



                    </Carousel>
                </CarouselWrapper>
            </MainDiv>
        </>
    )
}

export default Gallery

const MainDiv = styled.div`

width: 100vw;
height:700px;
display: flex;
justify-content: center;
align-items: center;
background-color: #000;

@media screen and (max-width:900px){
        height:400px;
        margin:0;
    }
`;

const CarouselWrapper = styled.div`
width: 100vw;
height:400px;
position: relative;
padding:0 10%;


@media screen and (max-width:900px){
    padding:0 5%;
    height:200px;
}







`;


const Carousel = styled(Slider)`

display:flex;
align-items:center;
justify-content:center;






`;
const Wrap = styled.div`

padding:0 20px;

background-color: #000;


@media screen and (max-width:900px){
    padding:0 5px;
}
`;



const ImgHolder = styled.div`

border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    
    display: block;
   
    
    height:100%;



    @media screen and (max-width:900px){
        height:50%;
    }
`;

const Img = styled.img`

        width: 100%;
        height:400px;
        object-fit: cover;
z-index:-1;
       

@media screen and (max-width:900px){
        height:200px;
    }



`;

const ShaderBox = styled.div`
width: 100vw;
  height: 400px;
  background: rgba(0,0,0,0.1);
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  z-index: 3;
  padding:0 20px;



`;
