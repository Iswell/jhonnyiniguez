import React from 'react'
import styled from 'styled-components'
import Video from "../assets/videos/foggyland.mp4"
import IconSocial from "../components/IconSocial"
import AudioPlayer from "../components/AudioPlayer"

const Hero = () => {
    return (
        <HeroContainer id="hero">
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroAudio>
                        <AudioPlayer />
                    </HeroAudio>
                    <HeroH1>
                    Unique sounds for inmersive experiences
                        
                        <IconSocial />
                    </HeroH1>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: linear-gradient(#000, #f26a2e);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -100px;
    color: #fff;

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;

        background:
            linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%,
                rgba( 0, 0, 0, 0.6) 100%);
                
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem  calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
height: 100vh;
max-height: 100%;
padding: 0;
color: #fff;
line-height: 1.1;
font-weight: bold;
`

const HeroH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
    font-size: clamp(1.5rem, 5vw, 3rem);
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    padding: 0 1rem;
    color: #fff;
`

const HeroAudio = styled.div`
    padding-bottom: 2rem;
    letter-spacing: 1px;

    &:hover {
        color: #000;
    }
`

