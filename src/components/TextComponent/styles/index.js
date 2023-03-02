import styled, { css } from 'styled-components';

export const TextComponentRoot = styled.div`
  ${({ theme, ...props }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${props.colorDarker
      ? theme.colors.primaryColor
      : theme.colors.white};
  `}
`;

export default TextComponentRoot;
