import React, { useRef, useEffect } from "react";

const WideImage = ({ path}) => {
   
    return (
      <div className='wide-image'>
        <img
              
              src={path}
            />
      </div>
    );
  };
  export default WideImage;
  