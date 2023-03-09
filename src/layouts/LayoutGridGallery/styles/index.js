import styled, { css } from 'styled-components';

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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: ${theme.spacings.medium};

    @media ${theme.medias.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
    height: fit-content;

    &:hover > img {
      transition: all 0.3s ease-in-out;
      transform: scale(1.2) rotate(9deg);
    }

    img {
      pointer-events: none;
      max-width: 100%;
    }
  `}
`;
