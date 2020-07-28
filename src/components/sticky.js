import React from "react";
import Path from "../assets/ewe/marketing.png";

const Sticky = ({content}) => {
  return (
    <div className="parentContainer">
	<div className="stickyContainer">
		<h2>{content.num}</h2>
		<h3>{content.title}</h3>
		<p>{content.text}</p>
	</div>
	<img src={content.imageurl}/>
</div>
  );
};

export default Sticky;


