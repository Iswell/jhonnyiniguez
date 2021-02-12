import styled from 'styled-components'

import { Link } from "gatsby"

export const Nav = styled.nav`
    background: ${({ active }) => active ? "#000" : "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0) 100%)"};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        background: ${({ click }) => (click ? "#000" : "linear-gradient(to botttom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)")};
        transition: 0.8s all ease;
    }
    
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
`

export const NavLogo = styled(Link)`
    font-family: 'Poppins', sans-serif;
    color: #f26a2e;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    diplay: flex;
    align-items: center;
    padding: 1.5rem;
    
    @media screen and (max-width: 960px) {
        padding-top: 1rem;
            padding-left: 1.5rem;
        }
    &:hover {
        color: #fff;
            transition: all 0.3s ease;
        }

    h1 {
        font-family: 'Poppins', sans-serif;
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 2.5vw, 2rem);
    }
`

export const MobileIcon = styled.div`
    display: none;
    padding: 1.5rem;
    
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: traslate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: ${({ click }) => (click ? "100%" : "-1000px")};
        opacity: 1;
        transition: all 0.2s ease;
        background: #fff;
        
    }
`

export const NavItem = styled.li`
    padding-top: 0.8rem;
    height: 80px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const NavLinks = styled(Link)`
    font-family: 'Poppins', sans-serif;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    
    &:hover {
        color: #f26a2e;
            transition: all 0.3s ease;
        }

    @media screen and (max-width: 960px) {
        color: #141414;
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
     
        &:hover {
        color: #f26a2e;
        transition: all 0.3s ease;
    }
}
   
`



