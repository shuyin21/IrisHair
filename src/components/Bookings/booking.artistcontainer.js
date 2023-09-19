import React, { useState } from "react";
import styled from "styled-components";

const ArtistContainer = ({ data, idHandler }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleImageClick = () => {
    setSelectedId(data.id);
    idHandler(data.id);
  };

  return (
    <ArtistWrapper>
      <ImageWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleImageClick}
      >
        <Image src={data.img} />
        {isHovered && <DarkShade />}
      </ImageWrapper>

      <Data>
        <h3>{data.name}</h3>
        <p>{data.job}</p>
      </Data>
    </ArtistWrapper>
  );
};

export default ArtistContainer;

const ArtistWrapper = styled.div`
  height: 300px;
  width: 200px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`;
const ImageWrapper = styled.div`
  flex: 0.6;
  border-radius: 50%;
  border: 1px solid white;
  overflow: hidden;
  position: relative;
  cursor: pointer; /* Add a pointer cursor to indicate the image is clickable */
`;

const Image = styled.img`
  width: 100%;
`;

const Data = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 10px;
  }
`;

const DarkShade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Cover the entire image */
  background-color: rgba(
    0,
    0,
    0,
    0.3
  ); /* Adjust the color and opacity as needed */
  z-index: 1; /* Ensure it's on top of the image */
`;
