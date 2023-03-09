import React from "react";
import Case from "./case";
import Audi from "../assets/home/audi.jpg";
import Collab from "../assets/home/collab.jpg";
import Crowded from "../assets/home/crowded.jpg";
import Trickle from "../assets/home/trickle.jpg";
import Paypal from "../assets/home/paypal.jpg";
import Uci from "../assets/home/uci.jpg";
import Quinta from "../assets/home/quinta.jpg";
import Ewe from "../assets/home/ewe.jpg";

import Share from "../assets/home/sixt.jpg";




const titles = [
  {
    id: 1,
    subtitle: "E-commerce website",
    title: "Audi User Cars Platform.",
    img: Uci,
    link: 'uci'

  },
  {
    id: 2,
    subtitle: "Mobile App and Website",
    title: "PayPal Website & App.",
    img: Paypal,
    link: 'paypal'

  },
  {
    id: 3,
    subtitle: "Internet of things",
    title: "EWE IOT Concept App.",
    img: Ewe,
    link: 'ewe'

  },
  {
    id: 4,
    subtitle: "Immersive website",
    title: "Audi Model Pages Website.",
    img: Audi,
    link: 'nemo'
  },
  {
    id: 5,
    subtitle: "Ethnography",
    title: "Vodafone Crowded Environment Research.",
    img: Crowded,
    link: 'crowded'

  },
  {
    id: 6,
    subtitle: "B2B Cloud software",
    title: "Collab Cloud Call Center.",
    img: Collab,
    link: 'nubitalk'

  },
  {
    id: 7,
    subtitle: "Interactive installation",
    title: "Installation for Privacy.",
    img: Trickle,
    link: 'trickle'

  },
  {
    id: 8,
    subtitle: "Service design",
    title: "Quinta Community Festival.",
    img: Quinta,
    link: 'quinta'

  },
  {
    id: 9,
    subtitle: "Mobility Provider App",
    title: "SIXT Share.",
    img: Share,
    link: 'sixt'

  }
];

const Cases = () => {
  return (
    <>
    <section className='cases'>

      <div className='container-fluid'>
        <div className='row'>
          <div className='spaceXXL'/>
          <div className='upperoffset'>
          <Case titles={titles[8]}></Case>  
          </div>
          <div className='spaceXXL'/>
          <Case titles={titles[3]} ></Case>  
        </div>
        <div className='row'>
          <div className='spaceXXL'/>
          <div className='upperoffset'>
          <Case titles={titles[1]} ></Case>  
          </div>
          <div className='spaceXL'/>
          <Case titles={titles[5]} ></Case>  
        </div>
        <div className='row'>
          <div className='spaceXXL'/>
          <div className='spaceL'/>

          <div className='upperoffset'>
          <Case titles={titles[2]} ></Case>  
          </div>
          <div className='spaceXL'/>
          <Case titles={titles[0]} ></Case>  
        </div>
        <div className='row'>
          <div className='spaceXXL'/>
          <div className='upperoffset'>
          <Case titles={titles[6]} ></Case>  
          </div>
          <div className='spaceXXL'/>
          <Case titles={titles[4]} ></Case>  
        </div>
        
      </div>
    </section>
    </>
  );
};

export default Cases;