import styled, { css } from 'styled-components';

import { TextComponentStyles } from '../../../components';
import { SectionContainerStyles } from '../../../sections';

export const LayoutFooterRoot = styled.footer`
  ${({ theme }) => css`
    min-height: 8rem;
    text-align: center;
    background-color: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.mediumGray};

    & ${TextComponentStyles.TextComponentRoot} {
      font-size: ${theme.fonts.sizes.small};

      & p {
        margin: 0;
      }
    }

    & ${SectionContainerStyles.SectionContainerRoot} {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  `}
`;

export default LayoutFooterRoot;
