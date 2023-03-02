import styled, { css } from 'styled-components';

export const LayoutFooterRoot = styled.footer`
  ${({ theme }) => css`
    height: 8rem;
    text-align: center;
    font-size: ${theme.fonts.sizes.xsmall};
    background-color: ${theme.colors.white};

    a {
      pointer-events: all !important;
      text-decoration: underline !important;
    }
  `}
`;

export default LayoutFooterRoot;
