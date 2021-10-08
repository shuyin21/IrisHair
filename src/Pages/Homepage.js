import React from 'react';
import About from '../components/About/About';
import Banner from '../components/BannerSection/Banner';
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';

const Homepage = () => {
    return (
        <>
            <AllWrapper>
                <Navbar />

                <Banner />
                <About />
            </AllWrapper>
        </>
    )
}

export default Homepage


const AllWrapper = styled.div`

max-width: 100vw;
overflow: hidden;

`;