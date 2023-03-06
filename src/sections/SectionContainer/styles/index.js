import styled, { css } from 'styled-components';

export const SectionContainerRoot = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    width: 100%;
    padding: ${theme.spacings.large};
  `}

  // ================================= Medias =================================
  ${({ theme }) => css`
    @media ${theme.medias.lteMedium} {
      padding-inline: ${theme.spacings.small};
    }
  `}
`;

export default SectionContainerRoot;
