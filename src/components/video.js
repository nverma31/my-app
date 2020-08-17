import React, { useRef, useEffect } from "react";
import ReactPlayer from 'react-player'
import Path from "../assets/ewe/home.mp4";

const Video = ({ path}) => {
   
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          loop
          url={path}
          className='react-player'
          width='100%'
          height='100%'
        />
      </div>
    );
  };
  export default Video;
  