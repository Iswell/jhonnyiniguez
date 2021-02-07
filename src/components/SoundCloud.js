import React from 'react'
import styled from 'styled-components'

import ReactPlayer from 'react-player'


const SoundCloud = () => {
     
    return (
      <div>
         <MusicContainer className='player-wrapper' id="music">
                <MusicContent>
                    <h1>Music</h1>
                <ReactPlayer url='https://soundcloud.com/h-recordstudio/04-deseame-suerte-johnny-camion-iniguez' />
                    
                </MusicContent>
            </MusicContainer>
      </div>
    )
  
}

export default SoundCloud

const MusicContainer = styled.div`
    background: #fcfcfc;
    height: 100%;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #000000;
    justify-content: center;
    align-items: center;
    max-height: 80vh;
    padding-top: 15rem;
    padding-bottom: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;

        @media screen and (max-width: 768px) {
        padding-top: 10rem;
        }
`
const MusicContent = styled.div`
    
    
    h1 {
        color: #000000;
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 2rem 5rem;
        }
        
`