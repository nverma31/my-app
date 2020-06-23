import React, { useRef, useEffect } from "react";
import ReactPlayer from 'react-player'

const Video = ({ path}) => {
   
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          url='https://vimeo.com/191292269'
          className='react-player'
          width='100%'
          height='100%'
        />
      </div>
    );
  };
  export default Video;
  