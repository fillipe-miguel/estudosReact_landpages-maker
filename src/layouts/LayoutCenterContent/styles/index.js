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
  `}
`;

export default LayoutCenterContentRoot;
