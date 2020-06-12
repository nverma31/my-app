import React from "react";

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
  // ,
  // {
  //   id: 3,
  //   subtitle: "Lumin",
  //   title: "For your best look ever",
  //   img: "lumin-min"
  // }
];

const Case = () => {
  return (
    <section className='case'>
        <div className="container" >
        <>
          <div className="case-image">
          <img src={require(`../assets/${caseStudies[1].img}.png`)} alt='' />
          </div>
        </>
      </div>
              <div className='case-details'>
                <span>{caseStudies[0].subtitle}</span>
                <h2>{caseStudies[0].title}</h2>
              </div>
              
    </section>
  );
};

export default Case;
