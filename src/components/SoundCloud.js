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
overflow: hidden;
    background: #fcfcfc;
    height: 100%;
    width: 100%;
    padding: 3rem calc((100vw - 1300px) / 2);
    justify-content: center;
    align-items: center;
    
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
        @media screen and (max-width: 768px) {
        padding-top: 0rem;
        
        }
`
const MusicContent = styled.div`
    
    h1 {
        font-family: 'Poppins', sans-serif;
        color: #F26A2E;
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1.2rem,5vw,2.5rem);
        padding: 2rem 2rem 3rem;

        @media screen and (max-width: 768px) {
            padding-bottom: 2rem;
            padding-top: 1rem;
            }
        }
        
`