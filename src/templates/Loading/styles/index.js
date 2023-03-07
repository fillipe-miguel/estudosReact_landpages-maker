import styled, { css } from 'styled-components';

export const LoadingRoot = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  `}
`;

export default LoadingRoot;
