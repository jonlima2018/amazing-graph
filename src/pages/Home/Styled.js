import styled from "styled-components";

const Container = styled.div`
	display: flex;
	width: ${({ theme }) => theme.screenWidth.w1};
	margin: 50px auto;
	align-items: center;
	position: relative;

	.home__containt {
		z-index: ${({ theme }) => theme.zIndex.i2};
		height: 460px;
		width: 430px;
		margin-left: 120px;

		h1,
		p {
			margin-bottom: 40px;
		}
	}

	.home__img {
		position: absolute;
		right: 0;
		top: 10;
		z-index: ${({ theme }) => theme.zIndex.i1};
		width: 750px;
		height: 450px;

		img {
			width: 100%;
			height: 100%;
		}
	}
`;

export default Container;
