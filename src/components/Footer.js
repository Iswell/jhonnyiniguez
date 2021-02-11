import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterGlobal>
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h2>JOHNNY IÑÍGUEZ</h2>
                    <p>Unique sounds for inmersive experiences</p>
                    
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>About</FooterLinkTitle>
                    <FooterLink to="#about">Bio</FooterLink>
                    <FooterLink to="#project">Photos</FooterLink>
                    <FooterLink to="#contact">Contact</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Music</FooterLinkTitle>
                    <FooterLink to="#video">Videos</FooterLink>
                    <FooterLink to="#music">Featuring</FooterLink>
                    <FooterLink to="/">Projects</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/">Facebook</FooterLink>
                    <FooterLink to="/">Youtube</FooterLink>
                    <FooterLink to="/">Instagram</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            
        </FooterContainer>
        <FooterCopy to="#music">
                <p>Jhonny Iñíguez © 2021 | Developed by Vixibly</p>
            </FooterCopy>
        </FooterGlobal>
    )
}

export default Footer
const FooterGlobal = styled.div`
padding: 1rem calc((100vw - 1300px) / 2);
background: #000000;

`

const FooterContainer = styled.div`
    padding: 2rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #fafafb;
    background: #000000;
    @media screen and (max-width: 768px) {
        padding-left: 1.5rem;
    }
    @media only screen and (max-width: 1000px) {
        padding-left: 5rem;
    }
    @media only screen and (max-width: 1024px) {
        padding-left: 3rem;
    }
    @media only screen and (max-width: 360px) {
        padding-left: 2rem;
    }
    @media only screen and (max-width: 280px) {
        padding-left: 1rem;
    }

`
const FooterDesc = styled.div`
padding: 1rem 2rem;
    h2 {
        font-family: 'Poppins', sans-serif;
        margin-bottom: 0rem;
        color: #f26a2e;
    }
    p {
        font-family: 'Poppins', sans-serif;
        margin-bottom: 1rem;
        color: #66605a;
    }
    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`
const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
   
`
const FooterLinkItems = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`
const FooterLinkTitle = styled.h2`
font-family: 'Poppins', sans-serif;
    font-size: 14px,
    margin-bottom: 28px;
   
`
const FooterLink = styled(Link)`
font-family: 'Poppins', sans-serif;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #66605a;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`
const FooterCopy = styled(Link)`

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
        text-align: center;
        text-decoration: none;
        
        padding-bottom: 0.5rem;
        color: #66605a;

        &:hover {
            color: #f26a2e;
            transition: 0.3s ease-out;
        }
    }
`