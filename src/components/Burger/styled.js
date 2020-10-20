import styled, { css } from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledBurger = styled.button`
  position: relative;
  z-index: 100;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  width: 32px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s ease-out;
  outline: none;

  &:before,
  &:after {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${colors.gray400};
    transition: all 0.4s ease-out;
    content: '';
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  ${(props) =>
    props.isMenuOpen &&
    css`
      span {
        opacity: 0;
        visibility: hidden;
      }

      &:before {
        transform: rotate(45deg) translateY(7px) translateX(8px);
      }

      &:after {
        transform: rotate(-45deg) translateY(-7px) translateX(8px);
      }
    `}
`;

export const StyledBurgerItem = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${colors.gray400};
  transition: all 0.4s ease-out;
`;
