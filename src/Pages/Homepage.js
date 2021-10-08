import React from 'react';
import About from '../components/About/About';
import Banner from '../components/BannerSection/Banner';

import Navbar from '../components/Navbar/Navbar';

const Homepage = () => {
    return (
        <>
            <Navbar />

            <Banner />
            <About />
        </>
    )
}

export default Homepage
