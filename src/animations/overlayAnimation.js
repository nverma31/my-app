import gsap from "gsap";

let tl = gsap.timeline();

export const homeAnimation = completeAnimation => {
   tl.to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4
        }
      })
      .to(".intro-overlay", 0, {
        css: { display: "none" }
        ,       
         onComplete: completeAnimation

       
      }) ;
     
  };