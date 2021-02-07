import React from 'react'
import ReactPlayer from 'react-player'

import "./ResponsiveVideo.css"


const ResponsiveVideo = ({ url }) => {
     
      return (
        <div id="video" className='player-container'>
        <h1>Videos</h1>
        <div className='player-wrapper'>
          
          <ReactPlayer
            id="video"
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            
            controls={true}
            
          />
          
        </div>
        </div>
      )
    
  }

  export default ResponsiveVideo

