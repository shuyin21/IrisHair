import React from 'react'
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';






const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <NavMenu isOpen={isOpen}>
                <NavItem isOpen={isOpen}>
                    <NavLinks onClick={toggle} to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80
                        }


                    >
                        <span>About</span>
                    </NavLinks>
                </NavItem>
                <NavItem isOpen={isOpen}>
                    <NavLinks onClick={toggle} to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80
                        }


                    >
                        <span>Services</span>
                    </NavLinks>
                </NavItem>
                <NavItem isOpen={isOpen}>
                    <NavLinks to="gallery"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80
                        }>
                        <span>Gallery</span>
                    </NavLinks>


                </NavItem>
                <NavItem isOpen={isOpen}>
                    <NavLinks to="reviews"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80
                        }>
                        <span>Reviews</span>
                    </NavLinks>


                </NavItem>

                <NavItem isOpen={isOpen}>
                    <NavLinks to="contact"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80
                        }>
                        <span>Contact</span>
                    </NavLinks>
                </NavItem>
            </NavMenu>
        </>
    )
}

export default Sidebar


const NavMenu = styled.ul`
display: none;


@media screen and (max-width: 960px){
    display: flex;
    position: ${({ isOpen }) => (isOpen ? 'fixed' : 'absolute')};
    width: 100%;
    
    opacity: 100%;
    top: ${({ isOpen }) => (isOpen ? '0px' : '-400px')};
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    margin-top:60px;
    margin-right: 0px;
    margin-left: 0;
    padding: 0 0 0 10px;
    z-index: 100;
    background-color: #000;
    color:#fff;
    list-style: none;
text-align:center;
transition: 0.8s ease-in-out;
}
`;

const NavItem = styled.li`

@media screen and (max-width: 960px){
    opacity:${({ isOpen }) => (isOpen ? '100%' : '0%')};
    transition: 1.5s ease-in-out;
    height:60px;
}


`;

const NavLinks = styled(LinkS)`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;

padding: 0px;
position: relative;

margin: 0;


    
    span{
        
        font-size: 15px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 0px;
        white-space:nowrap;
        position: relative;
        cursor: pointer;
        color:#d0a37c;
        margin-left:20px;
       
&:before{
    background-color: #000;
    border-radius:0px 0px 4px 4px;
    bottom: -6px;
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



&:hover {
    span:before {
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important;
    
    
    }
}


`;
