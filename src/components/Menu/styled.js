import styled, { css } from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0px 250px;
  background-color: rgba(255, 255, 255, 0.95);
  opacity: 0;
  visibility: hidden;
  transform: scale(1.15);
  transform: scale3d(1.15, 1.15, 1.15);
  transition: all 0.4s ease-out;
  overflow: auto;

  ${(props) =>
    props.isMenuOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      transform: scale3d(1, 1, 1);
    `}
`;

export const StyledMenuList = styled.ul`
  display: block;
  margin: -10px 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledMenuItem = styled.li`
  margin: 20px 0;
  text-align: right;

  a {
    position: relative;
    display: inline-block;
    font-size: 90px;
    font-weight: 900;
    color: ${colors.gray400};
    text-transform: lowercase;
    text-decoration: none;
    transition: all 0.4s ease-out;

    &:before {
      margin-right: 10px;
      opacity: 0;
      content: '/';
    }

    &:hover {
      color: ${colors.red400};

      &:before {
        opacity: 1;
      }
    }
  }
`;
