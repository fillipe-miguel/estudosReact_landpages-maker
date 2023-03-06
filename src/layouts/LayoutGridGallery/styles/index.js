import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: ${theme.spacings.medium};
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
