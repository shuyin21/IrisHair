import React from 'react';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import BigImg from '../../images/big-image.jpg';
import Sm1 from '../../images/sm1.jpg';
import Sm2 from '../../images/sm2.jpg';
import Sm3 from '../../images/sm3.jpg';
import Sm4 from '../../images/sm4.jpg';
import Sm5 from '../../images/sm5.jpg';

const About = () => {
    return (
        <>
            <AboutDiv id='about'>
                <AboutWrapper>

                    <LeftDiv>
                        <h3>Mobile <br /> Hairdresser in Leeds</h3>
                        <span>
                            Welcome to Destiny. We provide high quality hair & beauty services
                            at an affordable price throughout Central London.
                            Haircuts, hair extensions, bridal hair & beauty, colour, blow dry, highlights, keratin, balayage, threading and more…
                        </span>
                        <ButtonDiv to='prices'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80
                            }
                        >VIEW PRICES</ButtonDiv>
                    </LeftDiv>
                    <RightDiv>
                        <ImageWrapper>
                            <BigImage />
                            <SmallImageWrapper>
                                <SmallImage style={{ backgroundImage: `url(${Sm1})` }} />
                                <SmallImage style={{ backgroundImage: `url(${Sm2})` }} />
                            </SmallImageWrapper>
                        </ImageWrapper>
                        <BottomImageWrapper>
                            <SmallImage style={{ backgroundImage: `url(${Sm3})` }} />
                            <SmallImage style={{ backgroundImage: `url(${Sm4})` }} />
                            <SmallImage style={{ backgroundImage: `url(${Sm5})` }} />
                        </BottomImageWrapper>
                    </RightDiv>
                </AboutWrapper>


            </AboutDiv>

        </>
    )
}

export default About


const AboutDiv = styled.div`
width: 100vw;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;



@media screen and (max-width:900px){
    height:1000px;
}

`;

const AboutWrapper = styled.div`
width:70%;
height:80%;
display:grid;
grid-template-columns:50% 50%;


@media screen and (max-width:900px){
    display: flex;
    flex-direction: column;
    width:100vw;
    height:900px;
}

`;

const LeftDiv = styled.div`
display:flex;
flex-direction: column;
width: 80%;
align-items: flex-start;
justify-content: center;
text-align: left;

@media screen and (max-width:900px){
    width:100%;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    padding:0 5%;
}




h3{
    font-size: 48px;
    font-weight: 100;
    margin-bottom: 30px;
    
}

span{
font-size: 16px;
margin-bottom: 30px;
font-weight: 100;
}




`;
const ButtonDiv = styled(LinkS)`
width:150px;
height:50px;
text-align: center;
display:flex;
align-items: center;
justify-content: center;
font-weight: bold;
background-color: #d0a37c;
color: #fff;
cursor: pointer;

&:hover{
    background-color: #8F7056;
}

`;

const RightDiv = styled.div`
display:flex;
flex-direction: column;
padding:0 20px;


@media screen and (max-width:1300px){
    align-items: center;
    justify-content: center;
    padding:0;
}


@media screen and (max-width:900px){
    padding:0;
    height:800px;
}




`;

const ImageWrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;


`;

const BigImage = styled.div`
width:410px;
height:400px;
background-image: url(${BigImg});
background-size: cover;
object-fit: cover;
margin-bottom: 20px;



@media screen and (max-width: 1300px){
    margin-bottom: 0;
}

@media screen and (max-width:500px){
    width:90vw;
    height:450px;
    margin-bottom:0;
}



`;

const SmallImageWrapper = styled.div`
display:flex;
flex-direction: column;
height:100%;
align-items: flex-start;
justify-content: space-between;
padding-bottom: 20px;
margin-left:4%;


@media screen and (max-width: 1300px) {
    display:none;
}

`;

const SmallImage = styled.div`
width:10vw;
height:19vh;
object-fit: cover;
background-size: cover;




`;

const BottomImageWrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:1300px){
    display:none;
}
`;