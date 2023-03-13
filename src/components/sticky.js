import React from "react";

const Sticky = ({content}) => {
  return (
    <div className="parentContainer">
	<div className="stickyContainerreverse">
		<h2>{content.num}</h2>
		<h3>{content.title}</h3>
		<p>{content.text}</p>
	</div>
	<img src={content.imageurl}/>
</div>
  );
};

export default Sticky;


