import styled from "styled-components";

const SHeader = styled.header`
	width: ${({ theme }) => theme.screenWidth.w1};
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	padding: 20px 40px 20px 80px;

	.header__nav {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}
`;

export default SHeader;
