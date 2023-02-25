import styled from 'styled-components';

// const titleSize = {
//   small: (theme) => theme.fonts.sizes.small,
//   medium: (theme) => theme.fonts.sizes.medium,
//   large: (theme) => theme.fonts.sizes.large,
// };

export const Container = styled.h1`
  color: ${({ theme, colorDarker }) =>
    colorDarker ? theme.colors.black : theme.colors.white};

  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: ${({ theme, size }) => theme.fonts.sizes[size]};

  @media ${({ theme }) => theme.media.lteMedium} {
    font-size: ${({ theme, size }) =>
      size === 'xxxlarge'
        ? theme.fonts.sizes.xlarge
        : theme.fonts.sizes.xxxlarge};
  }
`;

export default Container;

// font-size: ${({ theme, size }) => titleSize[size](theme)};
