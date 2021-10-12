import React from 'react'
import styled from 'styled-components';
import Pback from '../../images/prices-background2-2.jpg';
import { HairData, ExtensionData, EyeTreat, Threading } from './PricesData';

const Prices = () => {
    return (
        <>
            <PricesDiv id='services'>
                <BackImage>
                    <h1>Our services</h1>
                </BackImage>
                <PricesWrapper>
                    <BoxWrapper>
                        <Pbox>
                            <h3>HAIR</h3>
                            {HairData.map((data) => (
                                <ServiceHolder key={data.id}>
                                    <PriceBox>
                                        <ServiceWrapper>
                                            <h5>{data.itemName}</h5>
                                        </ServiceWrapper>
                                        <Dots />
                                        <PricingWrap>
                                            <h5>{data.itemPrice}</h5>
                                        </PricingWrap>

                                    </PriceBox>
                                    <DetailsDiv>{data.itemDetails}</DetailsDiv>
                                </ServiceHolder>))}
                        </Pbox>
                        <Pbox>
                            <h3>HAIR EXTENSIONS</h3>
                            {ExtensionData.map((data) => (
                                <ServiceHolder key={data.id}>
                                    <PriceBox>
                                        <ServiceWrapper>
                                            <h5>{data.itemName}</h5>
                                        </ServiceWrapper>
                                        <Dots />
                                        <PricingWrap>
                                            <h5>{data.itemPrice}</h5>
                                        </PricingWrap>

                                    </PriceBox>
                                    <DetailsDiv>{data.itemDetails}</DetailsDiv>
                                </ServiceHolder>))}
                        </Pbox>
                        <Pbox>
                            <h3>EYE ENHANCING TREATMENT</h3>
                            {EyeTreat.map((data) => (
                                <ServiceHolder key={data.id}>
                                    <PriceBox>
                                        <ServiceWrapper>
                                            <h5>{data.itemName}</h5>
                                        </ServiceWrapper>
                                        <Dots />
                                        <PricingWrap>
                                            <h5>{data.itemPrice}</h5>
                                        </PricingWrap>

                                    </PriceBox>
                                    <DetailsDiv>{data.itemDetails}</DetailsDiv>
                                </ServiceHolder>))}
                        </Pbox>
                        <Pbox>
                            <h3>THREADING</h3>
                            {Threading.map((data) => (
                                <ServiceHolder key={data.id}>
                                    <PriceBox>
                                        <ServiceWrapper>
                                            <h5>{data.itemName}</h5>
                                        </ServiceWrapper>
                                        <Dots />
                                        <PricingWrap>
                                            <h5>{data.itemPrice}</h5>
                                        </PricingWrap>

                                    </PriceBox>
                                    <DetailsDiv>{data.itemDetails}</DetailsDiv>
                                </ServiceHolder>))}
                        </Pbox>
                    </BoxWrapper>
                </PricesWrapper>
            </PricesDiv>
        </>
    )
}

export default Prices

const PricesDiv = styled.div`
width:100vw;
min-height:1500px;
display:flex;
flex-direction: column;
align-items: center;



`;

const BackImage = styled.div`
width:100vw;
height:400px;
display:flex;
justify-content: center;
align-items: center;
color:#fff;
margin-bottom: 100px;
box-shadow: 10px 5px 3px #363636;
background-size: cover;
object-fit: cover;
background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${Pback});

@media screen and (max-width:768px){
    height:200px;
    /* margin-bottom: 0; */
}

h1{
    font-weight: 100;
    font-size: 48px;
}
`;
const PricesWrapper = styled.div`
width:80%;
min-height:400px;
padding:50px;
background-color:#000 ;
margin-bottom: 50px;



@media screen and (max-width:768px){
    width: 100%;
    padding:20px 5px;
}


`;
const BoxWrapper = styled.div`
width:100%;
height:100%;
background-color:#000 ;
display:grid;
grid-template-columns: 50% 50%;



@media screen and (max-width:1200px){
    display:flex;
    flex-direction: column;
}
`;


const Pbox = styled.div`
width:100%;
height:100%;
padding:0 30px;
margin:20px 0;
display:flex;
flex-direction: column;


h3{
    color:#d0a37c;
    font-size: 32px;
    font-weight: 200;
    margin-bottom: 30px;
}

`;
const ServiceHolder = styled.div`
width:100%;
display:flex;
flex-direction: column;

`;



const PriceBox = styled.div`
width:100%;
display: flex;

align-items:flex-end;
justify-content: space-between;
font-size: 20px;



h5{
    color:#fff;
    display:table-cell;
    width:fit-content;
    padding:0;
    margin:0 10px;
    background-color: #000;
    font-weight: 300;
    font-family: 'ovo';
}
`;
const ServiceWrapper = styled.div`

display:table-cell;
width:1%;
white-space: nowrap;

line-height: 1;
margin-top: 0;

background-color: #000;
z-index: 10;



`;

const Dots = styled.div`

position:relative;
display:table-cell;
border-bottom: 1px dashed #99999999;
width: 98%;
top:-3px;
overflow:hidden;
margin-left: 10px;





`;

const PricingWrap = styled.div`
width:50px;
display:flex;
align-items: center;
h5{
    color:#d0a37c;
    background-color: #000;
    font-weight: 200;
    
}
`;

const DetailsDiv = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: flex-start;
color:#AFAFAF;
margin:10px 0;
font-size: 16px;
`;