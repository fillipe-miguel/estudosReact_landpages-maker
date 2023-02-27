import styled, { css } from 'styled-components';
import medias from './medias';

export const HeadingRoot = styled.h1`
  ${medias()}

  // ================================= Para pegar as props =================================
  ${({ theme, colorDarker, size, uppercase }) => css`
    color: ${colorDarker ? theme.colors.black : theme.colors.white};

    text-transform: ${uppercase ? 'uppercase' : 'none'};

    font-size: ${theme.fonts.sizes[size]};
  `}
`;

export default HeadingRoot;

// ================================= Antiga organização =================================

// font-size: ${({ theme, size }) => titleSize[size](theme)};

// @media ${({ theme }) => theme.media.lteMedium} {
//   font-size: ${({ theme, size }) =>
//     size === 'xxxlarge'
//       ? theme.fonts.sizes.xlarge
//       : theme.fonts.sizes.xxxlarge};
// }

// color: ${({ theme, colorDarker }) =>
//     colorDarker ? theme.colors.black : theme.colors.white};

// text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
// font-size: ${({ theme, size }) => theme.fonts.sizes[size]};
