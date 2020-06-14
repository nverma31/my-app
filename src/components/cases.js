import React from "react";
import Case from "./case";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin’s unique needs",
    img: "curology-min"
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: "yourspace-min"
  }
 
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='spaceXXL'/>
          <div className='upperoffset'>
          <Case></Case>  
          </div>
          <div className='spaceXXL'/>
          <Case></Case>  
        </div>
        <div className='row'>
          <div className='spaceXXL'/>
          <div className='upperoffset'>
          <Case></Case>  
          </div>
          <div className='spaceXL'/>
          <Case></Case>  
        </div>
        <div className='row'>
          <div className='spaceXXL'/>
          <div className='spaceL'/>

          <div className='upperoffset'>
          <Case></Case>  
          </div>
          <div className='spaceXL'/>
          <Case></Case>  
        </div>
        <div className='row'>
          <div className='spaceXXL'/>
          <div className='upperoffset'>
          <Case></Case>  
          </div>
          <div className='spaceXXL'/>
          <Case></Case>  
        </div>
        
      </div>
    </section>
  );
};

export default Cases;