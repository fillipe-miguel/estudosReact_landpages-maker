import { css } from 'styled-components';

function medias() {
  return css`
    @media ${({ theme }) => theme.medias.lteMedium} {
      font-size: ${({ theme, size }) =>
        size === 'xxxlarge'
          ? theme.fonts.sizes.xlarge
          : theme.fonts.sizes.xxxlarge};
    }
  `;
}

export default medias;
