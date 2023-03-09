import styled, { css } from 'styled-components';

export const BaseRoot = styled.div`
  ${({ theme }) => css`
    /* padding-top: 9rem; */

    @media ${theme.medias.lteMedium} {
      padding-top: 0;
    }
  `}
`;

export default BaseRoot;
