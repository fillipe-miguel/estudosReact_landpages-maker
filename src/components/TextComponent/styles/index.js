import styled, { css } from 'styled-components';

export const TextComponentRoot = styled.p`
  ${({ theme, ...props }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${props.colorDarker
      ? theme.colors.primaryColor
      : theme.colors.white};
  `}

  ${({ theme }) => css`
    // ================================= Estilos do html =================================
    & p {
      margin: ${theme.spacings.medium} 0;
    }

    & a {
      font-weight: bolder;
      color: ${theme.colors.secondaryColor};
    }

    & a:hover {
      text-decoration: underline;
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
      margin: ${theme.spacings.small};
    }

    & ol > li,
    ul > li {
      margin: ${theme.spacings.small} 0;
      font-style: italic;
    }
  `}
`;

export default TextComponentRoot;
