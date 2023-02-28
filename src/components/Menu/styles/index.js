import styled, { css } from 'styled-components';
// Styles
import * as StyledSectionContainer from '../../../organizers/SectionContainer/styles';
import * as StyledHeading from '../../Heading/styles/index';
// Medias

// !TALVEZ TENHA QUE VOLTAR AQUI PARA MEXER NO HEADING

export const MenuRoot = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  left: 0;

  & > ${StyledSectionContainer.SectionContainerRoot} {
    padding-top: 0;
    padding-bottom: 0;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.mediumGray};
  `}

  // ================================= MEDIAS  =================================
  ${({ theme, ...props }) => css`
    @media ${theme.medias.lteMedium} {
      bottom: 0;
      height: 100vh;
      visibility: ${props.visible ? 'visibility' : 'hidden'};
      opacity: ${props.visible ? '1' : '0'};
      transition: all 0.3s ease-in-out;

      & > ${StyledSectionContainer.SectionContainerRoot} {
        display: grid;
        align-items: center;

        height: 100%;
        margin: 0;

        overflow-y: auto;
      }

      & ${StyledHeading.HeadingRoot} {
        padding-bottom: ${theme.spacings.large};
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  // ================================= MEDIAS  =================================
  ${({ theme }) => css`
    @media ${theme.medias.lteMedium} {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: ${theme.spacings.xxlarge};
    }
  `}
`;

export const ToggleMenuButton = styled.button`
  z-index: 6;
  position: fixed;
  top: 2rem;
  right: 2rem;

  display: none;

  font-size: 2.5rem;
  padding: 0.5rem;

  cursor: pointer;
  border: none;

  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
  `}

  // ================================= MEDIAS  =================================
  ${({ theme }) => css`
    @media ${theme.medias.lteMedium} {
      display: flex;
      align-items: center;
    }
  `}
`;
