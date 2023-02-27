import { css } from 'styled-components';

export default function medias(theme) {
  return css`
    @media ${theme.medias.lteMedium} {
      flex-flow: column nowrap;
      align-items: center;
    }
  `;
}
