import styled, { css } from 'styled-components';

export const MenuNavRoot = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.medias.lteMedium} {
      flex-flow: column nowrap;
      align-items: center;
    }
  `}
`;

export default MenuNavRoot;
