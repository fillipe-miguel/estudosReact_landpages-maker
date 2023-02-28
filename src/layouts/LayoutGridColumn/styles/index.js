import styled, { css } from 'styled-components';
import * as HeadingStyled from '../../../components/Heading/styles';

export const LayoutGridColumnRoot = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.xxlarge};

    & ${HeadingStyled.HeadingRoot} {
      margin-bottom: ${theme.spacings.small};
    }
  `}

  // ================================= Medias =================================
  ${({ theme }) => css`
    @media ${theme.medias.lteMedium} {
      text-align: center;
      grid-template-columns: 1fr;

      & ${HeadingStyled.HeadingRoot} {
        margin-bottom: ${theme.spacings.xlarge};
      }
    }
  `}
`;

export const TextContainer = styled.div`
  ${() => css`
    min-width: 35rem;
  `}

  // ================================= Medias =================================
  ${({ theme }) => css`
    @media ${theme.medias.lteMedium} {
      min-width: auto;
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${() => css`
    max-width: 74rem;
  `}
`;

export const Image = styled.img`
  ${() => css``}
`;
