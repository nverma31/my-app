import React from "react";
import Path from "../assets/Nemo/fullpage.png";

const Sticky = () => {
  return (
    <div class="parentContainer">
	<div class="stickyContainer">
		<h2>It’s a big world</h2>
		<h3>Finding your way</h3>
		<p>Many people’s vacation plans start with Lonely Planet. With so much content about so many destinations, we focused on helping users find what they’re looking for, even when they’re not sure what it is yet.</p>
		<ul>
			<li>Inspirational photography</li>
			<li>Personal quotes from the editors</li>
			<li>Most popular destinations</li>
		</ul>
	</div>
	<img src={Path} alt="Lonely Planet Asia screenshot"/>
</div>
  );
};

export default Sticky;


