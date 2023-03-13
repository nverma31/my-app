import React from "react";

const StickyReverse = ({content}) => {
  return (
    <div className="parentContainer">
	<img src={content.imageurl}/>
	<div className="stickyContainerreverse">
		<h2>{content.num}</h2>
		<h3>{content.title}</h3>
		<p>{content.text}</p>
	</div>
</div>
  );
};

export default StickyReverse;


