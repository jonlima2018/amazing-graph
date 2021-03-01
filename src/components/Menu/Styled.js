import styled from "styled-components";

const SMenu = styled.nav`
  .burguer {
    display: none;
  }

  .header__nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.screenWidth.medium}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .header__nav {
      position: absolute;
      top: 60px;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: none;
      z-index: ${({ theme }) => theme.zIndex.i2};
      opacity: 0;
      transform: translateX(200%);
      transition: transform 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);

      .text--menu {
        text-align: right;
      }
    }

    .burguer {
      display: block;
      position: relative;
      cursor: pointer;

      .burguer-nav {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: ${({ theme }) => theme.colors.gray};
        border-radius: 3px;
        z-index: 1;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      }

      .nav-1 {
        transform-origin: 0% 0%;
      }

      .nav-3 {
        transform-origin: 0% 100%;
      }

      ${({ isOpen }) =>
        isOpen &&
        `
			.nav-1{
				transform: rotate(45deg) translate(-3px, -3px);
			}

			.nav-2{
				opacity: 0;
				transform: rotate(0deg) scale(0.2, 0.2);
			}

			.nav-3{
				transform: rotate(-45deg) translate(0, -1px);
			}
		`}
    }

    ${({ isOpen }) =>
      isOpen &&
      `
		.header__nav {
			transform: none;
			opacity: 1;
		}
	`}
  }
`;

export default SMenu;
