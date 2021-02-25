import styled from "styled-components";

const SMenu = styled.nav`
	.header__nav {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}

	/* border: 1px solid black;
	height: 100vh;
	text-align: right;
	position: absolute;
	top: 0;
	right: 0;
	padding: 40px 20px;
	z-index: ${({ theme }) => theme.zIndex.i2}; */
`;

export default SMenu;
