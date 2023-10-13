import React from "react";
import styled from "styled-components";
import HeaderImg from "../../images/brands/header.jpg";
import Wella from "../../images/brands/wella.png";
import Kerastase from "../../images/brands/kerastase.png";
import Ouai from "../../images/brands/ouai.png";
import Schwarzkopf from "../../images/brands/schwarzkopf.png";
import Amika from "../../images/brands/amika.png";
import Ghd from "../../images/brands/ghd.png";

const Brands = () => {
  return (
    <BrandsWrapper>
      <BrandsHeader>
        <img src={HeaderImg} alt="Brands Header" />
        <HeaderText>Some of the brands we use</HeaderText>
      </BrandsHeader>
      <InsideWrapper>
        <BrandsContainer>
          <BoxWrapper>
            <BrandBox>
              <img src={Kerastase} />
            </BrandBox>
            <BrandBox>
              <img src={Wella} />
            </BrandBox>
            <BrandBox>
              <img src={Ouai} />
            </BrandBox>
          </BoxWrapper>
          <BoxWrapper>
            <BrandBox>
              <img src={Amika} />
            </BrandBox>
            <BrandBox>
              <img src={Schwarzkopf} />
            </BrandBox>
            <BrandBox>
              <img src={Ghd} />
            </BrandBox>
          </BoxWrapper>
        </BrandsContainer>
      </InsideWrapper>
    </BrandsWrapper>
  );
};

export default Brands;

const BrandsWrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 600px;
  }
`;

const InsideWrapper = styled.div`
  ${({ theme }) => theme.pageSizes.mediaInsideSize};
  width: 100%;
  height: 100%;
`;
const BrandsHeader = styled.div`
  position: relative; // added this
  width: 100%;
  height: 50%;
  overflow: hidden;
  box-shadow: 10px 5px 3px #363636;
  img {
    width: 100%;
    height: 100%;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); // semi-transparent black overlay
    z-index: 1;
  }
  @media screen and (max-width: 1080px) {
    height: 40%;
  }
  /* @media screen and (max-width: 768px) {
    height: 30%;
  } */
`;

const HeaderText = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;

  z-index: 2;
  font-family: "Ovo";
  font-size: 48px;
  font-weight: 100;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const BrandsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-ietms: center;
  justify-content: center;
`;
const BoxWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 5px;
`;
const BrandBox = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid #999;
  margin: 0 5px;
  padding: 5px;

  img {
    width: 100%;
    height: 100%;
  }
`;
