import styled from "styled-components";

const Container = styled.div`
	display: flex;
	width: ${({ theme }) => theme.screenWidth.large};
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
		top: 10px;
		z-index: ${({ theme }) => theme.zIndex.i1};
		width: 750px;
		height: 450px;

		img {
			width: 100%;
			height: 100%;
		}
	}

	@media (max-width: ${({ theme }) => theme.screenWidth.large}) {
		width: ${({ theme }) => theme.screenWidth.medium};
		.home__containt {
			margin-left: 10px;
		}
		.home__img {
			top: 10px;
			width: 600px;
			height: 400px;
		}
	}

	@media (max-width: ${({ theme }) => theme.screenWidth.medium}) {
		width: ${({ theme }) => theme.screenWidth.small};
		flex-direction: column-reverse;
		.home__containt {
			margin: 0 auto;
			height: 100%;
			text-align: center;
		}
		.home__img {
			position: relative;
			margin-bottom: 40px;
			width: 500px;
			height: 300px;
		}
	}

	@media (max-width: ${({ theme }) => theme.screenWidth.small}) {
		width: ${({ theme }) => theme.screenWidth.xSmall};
		.home__containt {
			width: ${({ theme }) => theme.screenWidth.xSmall};
		}
		.home__img {
			width: ${({ theme }) => theme.screenWidth.xSmall};
			height: 200px;
		}
	}
`;

export default Container;
