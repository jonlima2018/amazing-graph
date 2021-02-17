import styled from "styled-components";
import teams from "../../assets/team.jpg";

const Container = styled.div`
	display: flex;
	width: ${({ theme }) => theme.screenWidth.w1};
	margin: 50px auto;
	align-items: center;
	background-image: url(${teams});
	background-repeat: no-repeat;
	background-size: 750px 450px;
	background-position: right center;

	.home__containt {
		height: 460px;
		width: 430px;
		margin-left: 120px;

		h1,
		p {
			margin-bottom: 40px;
		}
	}
`;

export default Container;
