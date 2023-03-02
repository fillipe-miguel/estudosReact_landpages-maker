import styled, { css } from 'styled-components';

import { TextComponentStyles } from '../../../components';

export const LayoutFooterRoot = styled.footer`
  ${({ theme }) => css`
    height: 8rem;
    text-align: center;
    background-color: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.mediumGray};

    & ${TextComponentStyles.TextComponentRoot} {
      font-size: ${theme.fonts.sizes.small};
    }

    a {
      pointer-events: all !important;
      text-decoration: underline !important;
    }
  `}
`;

export default LayoutFooterRoot;
