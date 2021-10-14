import React, { useState, useEffect } from 'react';

import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';



const Navbar2 = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [colorChange, setColorChange] = useState('false');


    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
            setColorChange('true')
        } else {
            setScrollNav(false);
            setColorChange('false')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome} navscroll={colorChange}>
                            Iris Hair
                        </NavLogo>




                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar2


const Nav = styled.nav`

background:${({ scrollNav }) => (scrollNav ? '#fff' : 'transparent')};

height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top:0;
z-index: 200;
overflow: hidden;
transition: 0.5s ease-in-out;

@media screen and (max-width:960px){
    transition: 0.8s all ease;
    background: #000;
    height:80px;
    margin-top: -80px;
}
`;

const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
/* height: ${({ isOpen }) => (isOpen ? '100px' : '50px')}; */
z-index: 1;
width: 100%;
padding: 0 24px;
max-width:1100px;
`;

const NavLogo = styled(LinkR)`
color: ${({ navscroll }) => (navscroll === 'true' ? '#222222' : '#fff')};
justify-self:flex-start;
cursor: pointer;
font-size: 1.7rem;
display:flex;
align-items: center;
margin-left: 24px;
font-weight:bold;
text-decoration: none;
font-family: 'ovo';
transition: 0.9s ease-in-out;
@media screen and (max-width:960px){
    color: #8F7056;
}


`;

