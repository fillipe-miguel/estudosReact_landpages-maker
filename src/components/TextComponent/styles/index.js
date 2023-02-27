import styled, { css } from 'styled-components';

export const TextComponentRoot = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
  `}
`;

export default TextComponentRoot;
