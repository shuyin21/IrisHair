import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";

const Card = ({ headerTitle, personName, review, stars }) => {
  const starArray = [1, 2, 3];
  return (
    <CardDiv>
      <StarsDiv>
        {starArray.map((star) => (
          <Star key={star} />
        ))}
      </StarsDiv>
      <HeaderTitle>{headerTitle}</HeaderTitle>
      <Review>{review}</Review>
      <PersonName>{personName}</PersonName>
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  width: 700px;
  height: 350px;
  padding: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin: 20px;
  @media screen and (max-width: 1080px) {
    width: 90%;
    height: auto;
  }
`;

const StarsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const Star = styled(BsFillStarFill)`
  color: #d0a37c;
  font-size: 3rem;
  margin: 0 10px;
`;

const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  color: #d0a37c;
`;

const Review = styled.p`
  text-align: center;
  color: #000;
  max-width: 80%;
  font-size: 0.9rem;
  font-family: "karla", sans-serif;
  margin-top: 10px;
`;

const PersonName = styled.span`
  color: #444;
  font-weight: 100;
  font-size: 1rem;
  margin-top: 10px;
`;
