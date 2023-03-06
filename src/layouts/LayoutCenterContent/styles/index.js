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
    margin-top: ${theme.spacings.large};
    text-align: justify;

    & h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-align: center;
    }
  `}
`;

export default LayoutCenterContentRoot;
