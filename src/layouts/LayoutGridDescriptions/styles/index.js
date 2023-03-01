import styled, { css } from 'styled-components';

import { HeadingStyles } from '../../../components';

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    & ${HeadingStyles.HeadingRoot} {
      position: relative;
      left: 5rem;
      margin: ${theme.spacings.medium} 0;
    }

    & ${HeadingStyles.HeadingRoot}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.fonts.sizes.xxxlarge};
      left: -5rem;
      top: -2.5rem;
      transform: skew(-15deg);
    }
  `}
`;
