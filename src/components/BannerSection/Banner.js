import React from 'react';
import styled from 'styled-components';

import ImgSlider from './ImgSlider';

const Banner = () => {
    return (
        <>
            <BannerContainer id='home'>
                <HeroBg>

                    <ImgSlider></ImgSlider>



                </HeroBg>

            </BannerContainer>
        </>
    )
}

export default Banner;




const BannerContainer = styled.div`
background:#0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
position: relative;
z-index: 1;

 @media screen and (max-width:768px){
    height: 40vh;
    
    
}

/* @media screen and (max-width:1200px){
    height:70vh;
} */
@media screen and (max-width:768px){
    height:78vh;
}
:before {
    content:'';
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
   
    z-index: 2;
}




`;

const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

@media screen and (max-width:768px){
    height: 100%;
    margin-top: 70px;
}


`;





