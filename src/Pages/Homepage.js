import React, { useState } from 'react';
import About from '../components/About/About';
import Banner from '../components/BannerSection/Banner';
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Prices from '../components/Prices/Prices';
import Testimonials from '../components/Testimonials/Testimonials';
import Location from '../components/Location/Location';
import Footer from '../components/Footer/Footer';

const Homepage = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);

    }



    return (
        <>

            <Navbar toggle={toggle} isOpen={isOpen} />
            <AllWrapper>
                <Banner />
                <About />
                <Prices />
                <Testimonials />
                <Location />
                <Footer />
            </AllWrapper>
        </>
    )
}

export default Homepage


const AllWrapper = styled.div`

max-width: 100vw;
overflow: hidden;

`;