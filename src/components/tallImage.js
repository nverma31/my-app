import React, { useRef, useEffect } from "react";

const TallImage = ({path}) => {
   
    return (
      <div className='tall-image'>
        <img
              src={path}
            />
      </div>
    );
  };
  export default TallImage;
  