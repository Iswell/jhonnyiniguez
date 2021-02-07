import React from 'react'
import ReactPlayer from 'react-player'
import "./ResponsiveVideo.css"

const SoundCloud = () => {
     
    return (
        <div id="music" className='player-container'>
         <h1>Music</h1>
            <div className='player-wrapper'>
                
                <ReactPlayer 
                className='react-audio'
                url='https://soundcloud.com/h-recordstudio/04-deseame-suerte-johnny-camion-iniguez' />
                
            </div>        
        </div>
    )
  
}

export default SoundCloud