import styled from "styled-components";
import teams from "../../assets/team.jpg";

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: ${({ theme }) => theme.screenWidth.w1};
	margin: 0 auto;

	background: url(${teams});
	background-repeat: no-repeat;
	background-size: 750px 450px;
	background-position: right center;
	align-items: center;

	.home__containt {
		margin-top: -130px;
		margin-left: 120px;
		width: 430px;

		h1,
		p {
			margin-bottom: 40px;
		}
	}
`;

export default Container;
