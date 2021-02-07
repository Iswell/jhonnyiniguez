import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email.jpg'
import IconSocial from "../components/IconSocial"

const Email = () => {

    return (
        <div>
            <EmailContainer id="contact">
                <EmailContent>
                    <h1>Let's play together!</h1>
                    <IconSocial />
                <FormWrap>
                <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true">
                    <p>
                        <label>
                            <input type="text" name="name" id="name" placeholder="Enter your Name"/>
                        </label>
                    </p>
                    <p>
                        <label> 
                            <input type="email" name="email" id="email" placeholder="Enter your Email" />
                        </label>
                    </p>
                    <p>
                        <label> 
                            <textarea name="message" id="message" placeholder="Enter your Message" ></textarea>
                        </label>
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
                </FormWrap>
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
        height: 80vw;
        width: 100%;
        padding: 10rem calc((100vw - 1300px) / 2);
        color: #fff;
        display: grid;
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
            text-align: center;
            margin-bottom: 1rem;
            font-size: clamp(1rem, 5vw, 3rem);
            padding: 0 1rem;
            color: #fff;
        }
        p {
            text-align: center;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            padding: 0 1rem;
            margin-bottom: 1rem;
        }
        form {
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
`
const FormWrap = styled.div`
        width: 350px;
        input {
            padding: 1rem 1.5rem;
            outline: none;
            width: 360px;
            height: 48px;
            border: none;
        }
            
            textarea {
            padding: 1rem 1.5rem;
            outline: none;
            width: 360px;
            height: 100px;
            border: none;
            
        }
            button {
                background: #F26A2E;
                white-space: nowrap;
                padding: 16px 40px;
                color: #fff;
                font-size: ${({ big }) => (big ? '20px' : '16px')};
                outline: none;
                border: none;
                min-widht: 100px;
                text-decoration: none;
                transition: 0.3s !important;
                
                &:hover {
                    background: #fff;
                    color: #F26A2E;
                    transform: translateY(-2px);
                }
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
