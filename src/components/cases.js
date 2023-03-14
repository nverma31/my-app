import React from "react";
import Case from "./case";
import Audi from "../assets/home/responsive.jpg";
import Collab from "../assets/home/collab.jpg";
import Crowded from "../assets/home/crowded.jpg";
import Trickle from "../assets/home/trickle.jpg";
import Paypal from "../assets/home/paypal.jpg";
import Uci from "../assets/home/uci2.jpg";
import Quinta from "../assets/home/quinta.jpg";
import Ewe from "../assets/home/ewe.jpg";

import Share from "../assets/home/sixt.jpg";




const titles = [
  {
    id: 1,
    subtitle: "E-commerce website design",
    title: "Audi User Cars Platform.",
    img: Uci,
    link: 'uci'

  },
  {
    id: 2,
    subtitle: "Mobile app and website development",
    title: "PayPal Reboot.",
    img: Paypal,
    link: 'paypal'

  },
  {
    id: 3,
    subtitle: "IoT concept app design",
    title: "EWE Amundsen.",
    img: Ewe,
    link: 'ewe'

  },
  {
    id: 4,
    subtitle: "Responsive website design",
    title: "Audi Model Pages.",
    img: Audi,
    link: 'nemo'
  },
  {
    id: 5,
    subtitle: "Design Ethnography",
    title: "Vodafone Crowded Environment Research.",
    img: Crowded,
    link: 'crowded'

  },
  {
    id: 6,
    subtitle: "SaaS design",
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
    subtitle: "Mobile app design",
    title: "SIXT Share Micromobility.",
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
          <Case titles={titles[0]} ></Case>  
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
          <Case titles={titles[1]} ></Case>  
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