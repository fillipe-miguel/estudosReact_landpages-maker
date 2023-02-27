import styled, { css } from 'styled-components';
import medias from './medias';

export const NavLinkRoot = styled.nav`
  ${({ theme }) => css`
    ${medias(theme)}
    display: flex;
    flex-flow: row wrap;
  `}
`;

export default NavLinkRoot;
