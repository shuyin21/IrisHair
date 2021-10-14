import React from 'react';
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';


const AppointmentsButton = () => {
    return (
        <>
            <NavBtn>
                <NavBtnLink to={"/appointments"}>Appointments</NavBtnLink>
            </NavBtn>
        </>
    )
}

export default AppointmentsButton

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