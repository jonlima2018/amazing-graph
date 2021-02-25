import styled from "styled-components";

const SHeader = styled.header`
	width: ${({ theme }) => theme.screenWidth.w1};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 20px 40px 20px 80px;
`;

export default SHeader;
