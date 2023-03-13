import styled, { css } from 'styled-components';

import { HeadingStyles } from '../../../components';

export const LayoutGridColumnRoot = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: ${theme.spacings.xxlarge};

    & ${HeadingStyles.HeadingRoot} {
      margin-bottom: ${theme.spacings.small};
    }
  `}

  // ================================= Medias =================================
  ${({ theme }) => css`
    @media ${theme.medias.lteMedium} {
      flex-direction: column;

      & ${HeadingStyles.HeadingRoot} {
        margin-bottom: ${theme.spacings.xlarge};
      }
    }
  `}
`;

export const TextContainer = styled.div`
  ${() => css`
    max-width: 35rem;
  `}

  // ================================= Medias =================================
  ${({ theme }) => css`
    @media ${theme.medias.lteMedium} {
      min-width: auto;
      text-align: center;
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${() => css`
    max-width: 64rem;
  `}
`;

export const Image = styled.img`
  ${() => css`
    max-width: 100%;
  `}
`;
