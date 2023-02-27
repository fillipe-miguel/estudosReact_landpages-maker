import styled, { css } from 'styled-components';

export const MenuLinkRoot = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    text-decoration: none;
    position: relative;
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};

    &::after {
      content: '';
      position: absolute;
      bottom: 1rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;

export default MenuLinkRoot;
