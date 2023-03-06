import styled, { css } from 'styled-components';

export const GoTopRoot = styled.a`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primaryColor};
    border-radius: 1rem;
    border: 2px solid ${theme.colors.white};
    bottom: 2rem;
    color: ${theme.colors.white};
    display: flex;
    font-size: ${theme.fonts.sizes.medium};
    height: 4rem;
    justify-content: center;
    position: fixed;
    right: 2rem;
    opacity: 0.5;
    z-index: 6;
    transition: all 0.3s ease-in-out;
    width: 4rem;

    &:hover {
      opacity: 1;
      border-color: ${theme.colors.secondaryColor};
      box-shadow: 0px 0px 8px 1px ${theme.colors.secondaryColor};
      color: ${theme.colors.secondaryColor};
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
    }

    &:hover > :first-child {
      animation: shakeUpDown 0.7s ease-in-out infinite;
    }
  `}

  @keyframes shakeUpDown {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-5px);
    }
  }
`;

export default GoTopRoot;
