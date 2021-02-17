import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

* {
	padding: 0;
	margin: 0;
	vertical-align: baseline;
	list-style: none;
    border: 0;
    outline: none;
    box-sizing:border-box;
}

.btn{
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    width: 220px;
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSize.f1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    transition: background-color 0.4s;

    &:hover{
        cursor:pointer;
        background-color: ${({ theme }) => theme.colors.darkOrange};
    
    }
}



`;

export default GlobalStyled;
