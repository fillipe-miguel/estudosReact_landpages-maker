import { css } from 'styled-components';

function medias(theme, props) {
  return css`
    @media ${theme.medias.lteMedium} {
      font-size: ${props.size === 'xxxlarge'
        ? theme.fonts.sizes.xlarge
        : theme.fonts.sizes.xxxlarge};
    }
  `;
}

export default medias;
