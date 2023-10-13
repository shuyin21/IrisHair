import React from "react";
import styled from "styled-components";
import BackG from "../../images/irishair-dark.png";
import Card from "./Card.js";
import {
  testimonialsOne,
  testimonialsTwo,
  testimonialsThree,
} from "./TestimonialsData";

const Testimonials = () => {
  return (
    <TDiv id="reviews">
      <TitleWrapper>
        <h1>Take their word for it</h1>
      </TitleWrapper>
      <TWrapper>
        <Card {...testimonialsOne} />
        <Card {...testimonialsTwo} />
        <Card {...testimonialsThree} />
      </TWrapper>
    </TDiv>
  );
};

export default Testimonials;

const TDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 800px;
  background-image: url(${BackG});
  background-size: cover;
  position: relative;
  overflow: hidden;
  box-sizing: border-box; // Ensure padding and border don't affect width
`;
const TitleWrapper = styled.div`
  position: relative;
  top: 20%;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  h1 {
    color: #fff;
    font-weight: 200;
    font-size: 38px;
    padding: 10px 20px;
    border-radius: 5px;
  }
`;

const TWrapper = styled.div`
  width: 100%;

  display: flex;
  overflow-x: auto;
  box-sizing: border-box;

  & > div {
    flex-shrink: 0;
  }
  &::-webkit-scrollbar {
    display: none; // Or width: 0;
  }
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
`;
