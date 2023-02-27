import styled, { css } from 'styled-components';
import medias from './medias';

export const HeadingRoot = styled.h1`
  // ================================= Para pegar as props =================================
  ${({ theme, ...props }) => css`
    ${medias(theme, props)}

    color: ${props.colorDarker
      ? theme.colors.primaryColor
      : theme.colors.white};

    text-transform: ${props.uppercase ? 'uppercase' : 'none'};

    font-size: ${theme.fonts.sizes[props.size]};
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
