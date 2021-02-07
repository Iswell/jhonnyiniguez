import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email.jpg'
import { Button } from "./Button"
import IconSocial from "../components/IconSocial"

const Email = () => {
    return (
        <div>
            <EmailContainer id="contact">
                <EmailContent>
                    <h1>Let's play together!</h1>
                    <IconSocial />

                    <form name="contact" 
                    method="POST" 
                    data-netlify="true">
                        <FormWrap>
                        <label>
                            <input type="text" name="name" placeholder="Enter your Name"/>
                        </label>
                        
                        </FormWrap>
                        <FormWrap>
                        <label>
                            <input type="email" placeholder="Enter your Email" id="email" />
                        </label>
                        
                        </FormWrap>
                    </form>
                    <div data-netlify-recaptcha="true"></div>
                    <Button 
                        as="button" 
                        type="submit" 
                        primary="true" 
                        css={`
                            height: 48px;
                            @media screen and (max-width:768px) {
                                width: 100%;
                                min-width: 350px;
                            }

                            @media screen and (max-width: 400px) {
                                width: 100%;
                                min-width: 250px;
                            }
                            
                            `}>Sign up</Button>
                            
                </EmailContent>
               
            </EmailContainer>
        </div>
    )
}

export default Email

const EmailContainer = styled.div`
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.5) 0%, 
        rgba(0,0,0,0.5) 35%, 
        rgba(0,0,0,0.1) 100%
        ), 
        url(${EmailBg}) no-repeat center;
        background-size: cover;
        height: 60vw;
        width: 100%;
        padding: 10rem calc((100vw - 1300px) / 2);
        color: #fff;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 968px) {
            height: 80vh;
        }

`
const EmailContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            color: #fff;
            text-align: center;
            margin-bottom: 1rem;
            font-size: clamp(1rem, 5vw, 3rem);
            padding: 0 1rem;
        }
        p {
            text-align: center;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            padding: 0 1rem;
            margin-bottom: 2rem;
        }
        form {
            z-index: 10;
        }
    color: #fff;
`
const FormWrap = styled.div`
        input {
            padding: 1rem 1.5rem;
            outline: none;
            width: 350px;
            height: 48px;
            border: none;
            margin-right: 1rem;
            margin-bottom: 2rem;
        }
        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;

            input {
                margin-bottom: 1rem;
                widht: 300px;
                margin-right: 0;
            }
        }
`
