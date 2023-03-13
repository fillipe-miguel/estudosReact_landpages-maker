import styled, { css } from 'styled-components';

export const LogoLinkRoot = styled.a`
  ${() => css`
    display: flex;
    justify-content: center;
    max-width: 23rem;
    max-height: 8rem;
  `}

  & img {
    width: 100%;
  }
`;

export default LogoLinkRoot;
