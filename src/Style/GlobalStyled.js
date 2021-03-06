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
    height:60px;
    border-radius: 12px;
    width: 250px;
    font-size: ${({ theme }) => theme.fontSize.f1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    transition: background-color 0.4s;

    &:hover{
        cursor:pointer;
        background-color: ${({ theme }) => theme.colors.darkOrange};
    
    }
}

.text{
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.gray};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
}

.text--logo{
    color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.f2};
    cursor:pointer;
}

.text--menu{
    color: ${({ theme }) => theme.colors.gray};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.f0};
    text-align:center;
    transition: background-color 0.4s;

    &:hover{
        color: ${({ theme }) => theme.colors.orange};
        cursor:pointer;
    }
}

.text--title{
    font-size: ${({ theme }) => theme.fontSize.f4};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
}

.text--paragraph{
    font-size: ${({ theme }) => theme.fontSize.f1};
}

@media (max-width: ${({ theme }) => theme.screenWidth.medium}) {
    #root {
        position:relative;
        overflow-x:hidden;
    }

    .text--title{
        font-size: ${({ theme }) => theme.fontSize.f3};
    }

    .text--paragraph{
        font-size: ${({ theme }) => theme.fontSize.f0};
    }

    .btn{
        font-size: ${({ theme }) => theme.fontSize.f0};
    }
}


`;

export default GlobalStyled;
