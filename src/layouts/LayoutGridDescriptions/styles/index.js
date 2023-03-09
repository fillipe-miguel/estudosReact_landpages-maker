import styled, { css } from 'styled-components';

import { HeadingStyles } from '../../../components';

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxlarge};

    @media ${theme.medias.lteMedium} {
      text-align: center;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.medias.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    & ${HeadingStyles.HeadingRoot} {
      position: relative;
      width: fit-content;
      left: 5rem;
      margin: ${theme.spacings.medium} 0;

      @media ${theme.medias.lteMedium} {
        left: 2rem;
        margin: ${theme.spacings.medium} auto;
      }
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
