import React from "react";
import jhonnySong from '../assets/audio/jhonnysong.mp4';
import styled from 'styled-components'
import useSound from 'use-sound';
import "./ResponsiveVideo.css"


const Pause = ({ stop }) => {
  return (
    <ButtonPlayer>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 512 512"
      className="button"
      onClick={() => stop()}
    >
      <path className="path" d="M256,0C114.61,0,0,114.61,0,256S114.61,512,256,512,512,397.39,512,256,397.39,0,256,0Zm0,486.4C128.75,486.4,25.6,383.24,25.6,256S128.75,25.6,256,25.6,486.4,128.76,486.4,256,383.25,486.4,256,486.4Z" />
      <path className="path" d="M217.6,115.2A12.8,12.8,0,0,0,204.8,128V384a12.8,12.8,0,0,0,25.6,0V128A12.8,12.8,0,0,0,217.6,115.2Z" />
      <path className="path" d="M294.4,115.2A12.8,12.8,0,0,0,281.6,128V384a12.8,12.8,0,0,0,25.6,0V128A12.8,12.8,0,0,0,294.4,115.2Z" />
    </svg>
    </ButtonPlayer>
  );
};

const Play = ({ play }) => {
  return (
    <ButtonPlayer>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      
      viewBox="0 0 512 512"
      className="button"
      onClick={play}
    >
      <path className="path" d="M256,0C114.61,0,0,114.61,0,256S114.61,512,256,512,512,397.39,512,256,397.39,0,256,0Zm0,486.4C128.75,486.4,25.6,383.24,25.6,256S128.75,25.6,256,25.6,486.4,128.76,486.4,256,383.25,486.4,256,486.4Z"/><path className="path" d="M401,245.89h0l-214.14-146A12.23,12.23,0,0,0,167.7,110V402a12.22,12.22,0,0,0,19.12,10.1L401,266.1a12.22,12.22,0,0,0,0-20.21ZM372.35,256,192.17,378.84V133.15Z"/>
    </svg>
    </ButtonPlayer>
  );
};


const Player = () => {
  const [play, { stop, isPlaying }] = useSound(jhonnySong);
  return (
    <div className="player">
      {isPlaying ? <Pause stop={stop} /> : <Play play={play} />}
    </div>
  );
};

export default Player;

const ButtonPlayer = styled.div`
@media only screen and (max-width: 768px) {
  button {
    width: 80%;
  }
    
`