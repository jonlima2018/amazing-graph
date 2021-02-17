import SHeader from "./Styled";

const Header = () => {
	return (
		<SHeader className="text">
			<span className="text--logo">DevChallenge</span>
			<nav>
				<ul className="header__nav">
					<li className="text--menu">Home</li>
					<li className="text--menu">Features</li>
					<li className="text--menu">Contact</li>
				</ul>
			</nav>
		</SHeader>
	);
};

export default Header;
