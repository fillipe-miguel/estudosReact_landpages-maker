import styled, { css } from 'styled-components';

export const TextComponentRoot = styled.p`
  ${({ theme, ...props }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${props.colorDarker
      ? theme.colors.primaryColor
      : theme.colors.white};
  `}
`;

export default TextComponentRoot;
