import styled, { css } from 'styled-components';

export const SectionBackgroundRoot = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  ${({ theme, ...props }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};

    ${props.setBackground &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
    `}
  `}
`;

export default SectionBackgroundRoot;
