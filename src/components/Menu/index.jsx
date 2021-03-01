import React, { useState } from "react";
import SMenu from "./Styled";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<SMenu isOpen={isOpen}>
			<div className="burguer" onClick={() => setIsOpen(!isOpen)}>
				<span className="burguer-nav nav-1" />
				<span className="burguer-nav nav-2" />
				<span className="burguer-nav nav-3" />
			</div>
			<ul className="header__nav">
				<li className="text--menu">Home</li>
				<li className="text--menu">Features</li>
				<li className="text--menu">Contact</li>
			</ul>

		</SMenu>
	);
};

export default Menu;
