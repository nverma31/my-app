import React, { useRef, useEffect } from "react";

const FullWidthImage = ({ path}) => {
   
    return (
      <div className='full-width-image'>
        <img
              
              src={path}
            />
      </div>
    );
  };
  export default FullWidthImage;
  