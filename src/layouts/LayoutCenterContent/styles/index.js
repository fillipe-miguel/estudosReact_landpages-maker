import styled, { css } from 'styled-components';

export const LayoutCenterContentRoot = styled.div`
  ${() => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`;

export const InnerHtml = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;

    // ================================= Estilos do html =================================
    & p {
      margin: ${theme.spacings.medium} 0;
    }

    & a {
      pointer-events: none;
    }

    & h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: ${theme.spacings.small} 0;
    }

    & ol,
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: ${theme.spacings.small} 0;
    }

    & ol > li,
    ul > li {
      font-style: italic;
    }
  `}
`;

export default LayoutCenterContentRoot;
