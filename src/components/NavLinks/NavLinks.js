import React from 'react'
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

const NavLinksB = (props) => {
    return (
        <NavLinks to={props.link}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80
            }
            navscroll={props.navscroll}
        >
            <span>{props.name}</span>
        </NavLinks>
    )
}

export default NavLinksB


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
`;