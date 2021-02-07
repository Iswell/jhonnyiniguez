import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';
import "./IconSocial.css"


const IconSocial = () => {
    return (
        <div>
            <IconContainer>

                <IconContent>
                <SocialIcon url="https://www.facebook.com/cantarodante.traktor" className="facebook" id="facebook" style={{ height: 40, width: 40, margin: 5 }} />
                </IconContent>  

                <IconContent>
                <SocialIcon  url="https://www.youtube.com/channel/UCTg7uNPer5yiCjRezrr-Tng/featured" style={{ height: 40, width: 40, margin: 5 }} />
                </IconContent>

                <IconContent>
                <SocialIcon  url="https://soundcloud.com/h-recordstudio/04-deseame-suerte-johnny-camion-iniguez" style={{ height: 40, width: 40, margin: 5 }} />
                </IconContent>

                <IconContent>
                <SocialIcon  url="https://www.instagram.com/cantarodante.traktor/?hl=af" style={{ height: 40, width: 40, margin: 5 }} />
                </IconContent>
                
            </IconContainer>
        </div>
    )
}

export default IconSocial

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    padding-bottom: 2rem;
    
`
const IconContent = styled.li`
    display: grid;
    grid-template-columns: repeat(2, 1fr 1fr);
    padding-right: 0.5rem;
    width: 60px;
    &:hover {
        transform: translateY(-4px);
        transition-duration: 300ms;
    }
`
