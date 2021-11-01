import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const Appointments = () => {
    const [click, setClick] = useState(true);


    function buttonClicked() {
        setClick(true);
        console.log('clicked' + click);
    }


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fxbc1u6', 'template_o8srhqa', form.current, 'add username').then((result) => {
            console.log(result.text);
            setClick(false);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    const [startDate, setStartDate] = useState(
        new Date()

    );




    const currentDate = new Date();

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };





    return (
        <>


            <ApDiv id='appointments'>
                <HeaderWrapper>
                    <h1>Please select the desired date and time</h1>
                    <h3>I will get back to you as soon as possible to confirm</h3>
                </HeaderWrapper>

                <FormWrapper>
                    <FormDiv ref={form} onSubmit={sendEmail}>
                        <FormInput required type='text' name='name' placeholder='Name' />
                        <FormInput required type='email' name='email' placeholder='Email' />
                        <DateDiv>
                            <DateInput name='date'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                filterTime={filterPassedTime}
                                minDate={currentDate}
                                minTime={setHours(setMinutes(new Date(), 0), 9)}
                                maxTime={setHours(setMinutes(new Date(), 30), 22)}
                                dateFormat=" d MMMM, yyyy h:mm aa"


                            />
                        </DateDiv>


                        <FormTextarea required name='message' placeholder='Your message' />
                        <FormButton type='submit' value='Send' />

                    </FormDiv>
                </FormWrapper>
                <EmailBox click={click}>
                    <h1>Email sent successfully</h1>
                    <button onClick={buttonClicked} >OK</button>
                </EmailBox>
            </ApDiv>
        </>
    )
}

export default Appointments


const ApDiv = styled.div`
background-color: #000;
height: 1000px;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
z-index:9;



`;

const HeaderWrapper = styled.div`
height:100px;
width:100%;
display: flex;
flex-direction: column;
align-items: center;
color:#fff;
margin-top:200px;
text-align: center;



h3{
    margin-top:5px;
    color:#d0a37c;
}

`;

const FormWrapper = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
@media screen and ( min-width:1000px) and (max-width:1600px){
    width: 70%;
}
@media screen and (max-width:1000px){
    width: 100%;
    z-index:10;
}

`;

const FormDiv = styled.form`
display:flex;
flex-direction: column;
width:100%;
height:100%;
align-items: center;
justify-content: flex-start;
margin-top:50px;
@media screen and (max-width:1000px){
    height:400px;
}
@media screen and (max-width:768px){
    
    overflow:hidden;
}
`;
const FormInput = styled.input`
width:50%;
height:3rem;
border-radius: 10px;
padding-left:20px;
margin:10px 0;

@media screen and (max-width:768px){
    width: 90%;
}
`;

const FormTextarea = styled.textarea`
width: 50%;
height:7rem;
border-radius: 10px;
padding: 5px 0 0 20px;
margin:10px 0;

@media screen and (max-width:768px){
    width: 90%;
}
`;
const FormButton = styled.input`
width:30%;
height:3rem;
color: #fff;
background-color:transparent;
border:2px solid #d0a37c;
cursor:pointer;
font-size: 18px;
&:hover{
    background-color:#d0a37c ;
}
`;


const DateDiv = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:50%;

@media screen and (max-width:768px){
    width: 90%;
}

`;
const DateInput = styled(DatePicker)`
 
 width:100%;
height:3rem;
border-radius: 10px;
padding-left:20px;
margin:10px 0;
 
 `;

const EmailBox = styled.div`
position:absolute;
display:${({ click }) => (click === true ? 'none' : 'flex')};
flex-direction: column;
background-color:#000;
color:#fff;
height:200px;
width:300px;
border:2px solid #EF4836;
border-radius: 10px;
align-items: center;
justify-content: center;
text-align: center;
font-size: 15px;
button{
    margin:10px;
    padding: 5px 20px;
    cursor:pointer;
    border:2px solid #EF4836;
    background-color:black;
    color:white;
    &:hover{
        background-color:#EF4836 ;
    }
}
`;