import React from "react";
import Menu from "../Menu";
import SHeader from "./Styled";

const Header = () => {
	return (
		<SHeader className="text">
			<span className="text--logo">DevChallenge</span>
			<Menu />
		</SHeader>
	);
};

export default Header;
