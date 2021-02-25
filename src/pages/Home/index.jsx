import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Container from "./Styled";
import teams from "../../assets/team.jpg";

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="home__containt">
					<h1 className="text text--title">
						Create amazing graphics
					</h1>
					<p className="text text--paragraph">
						Colaborate and create beautiful graphics with your team
					</p>
					<Button title="Start Now" />
				</div>
				<div className="home__img">
					<img src={teams} alt="teams" />
				</div>
			</Container>
		</>
	);
};

export default Home;
