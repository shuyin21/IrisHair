import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
// import AppointmentsButton from '../AppointmentsButton/AppointmentsButton';



const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [colorChange, setColorChange] = useState('false');




    useEffect(() => {
        const changeNav = () => {
            if (window.scrollY >= 80) {
                setScrollNav(true);
                setColorChange('true')
            } else {
                setScrollNav(false);
                setColorChange('false')
            }
        }
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
                        <MobileIcon onClick={toggle} >
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>

                                <NavLinks


                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80
                                    }
                                    navscroll={colorChange}


                                >
                                    <span>ABOUT</span>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80
                                    }
                                    navscroll={colorChange}
                                >
                                    <span>SERVICES</span>
                                </NavLinks>



                            </NavItem>
                            <NavItem>
                                <NavLinks to="gallery"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80
                                    }
                                    navscroll={colorChange}
                                >
                                    <span>GALLERY</span>
                                </NavLinks>



                            </NavItem>

                            <NavItem>
                                <NavLinks to="reviews"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80
                                    }
                                    navscroll={colorChange}
                                >
                                    <span>REVIEWS</span>
                                </NavLinks>



                            </NavItem>





                            <NavItem>
                                <NavLinks to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80
                                    }
                                    navscroll={colorChange}>
                                    <span>CONTACT</span>
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <ButtonWrapper>
                            <NavBtn>
                                <NavBtnLink to='appointments'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80
                                    } >Appointments</NavBtnLink>
                            </NavBtn>
                        </ButtonWrapper>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar


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

const MobileIcon = styled.div`

display: none;
@media screen and (max-width: 960px){
    display:block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%,70%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    

}

`;

const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: -22px;


@media screen and (max-width: 960px){
    display: none;
}
`;

const NavItem = styled.li`
height:60px;



`;

const NavLinks = styled(LinkS)`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right:auto;
margin-left:25px;

&.active {
    span{
border-bottom: 2px solid #000;}
}


    
    span{
        color: ${({ navscroll }) => (navscroll === 'true' ? '#222222' : '#fff')};
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding:2px 0px;
        white-space:nowrap;
        position: relative;
        cursor: pointer;
        transition: 0.9s ease-in-out;
    
&:before{
    background-color: #000;
    border-radius:0px 0px 4px 4px;
    bottom: -2px;
    content:'';
    height:2px;
    left:0px;
    opacity: 0;
    position: absolute;
    right:0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
    width: auto;
}

}
&:hover {
    span:before {
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important;
    
    
    }
}
`;
const ButtonWrapper = styled.div`
display: flex;
align-items: center;


@media screen and (max-width:960px){
    display: none;
}
`;
const NavBtn = styled.nav`
display: flex;
align-items: center;


`;

const NavBtnLink = styled(LinkS)`

background: #d0a37c;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
font-weight: bold;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2 ease-in-out;
    background: #8F7056;
    
    
}


`;