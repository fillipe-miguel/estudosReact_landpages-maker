import styled, { css } from 'styled-components';
import { TextComponentStyles } from '../../../components';

export const PageNotFoundRoot = styled.div`
  ${({ theme }) => css`
    & ${TextComponentStyles.TextComponentRoot} {
      font-size: ${theme.fonts.sizes.large};
      text-align: center;
    }
  `}
`;

export default PageNotFoundRoot;
