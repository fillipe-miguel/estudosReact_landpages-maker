import styled, { css } from 'styled-components';

export const LogoLinkRoot = styled.a`
  ${() => css`
    display: flex;
    align-items: center;

    > img {
      max-height: 3rem;
    }
  `}
`;

export default LogoLinkRoot;
