import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledProject = styled.div`
  position: relative;
  display: inline-block;
  max-width: 45%;
  margin: 2.5%;

  a {
    display: inline-block;
    text-decoration: none;

    &:hover {
      color: initial;
      background-color: initial;

      h3 {
        color: ${colors.red400};
      }

      img {
        transform: scale(2);
        transform: scale3d(2, 2, 2);
      }
    }
  }

  &:nth-child(1) {
    display: block;
    max-width: 100%;
  }

  @media screen and (max-width: 1140px) {
    display: block;
    max-width: 100%;
  }
`;

export const StyledInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 6;
  margin: 0;

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: ${colors.white};
    line-height: 1.4;
  }

  h6 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    color: ${colors.white};
    line-height: 1.4;
  }

  @media screen and (max-width: 460px) {
    h3 {
      font-size: 14px;
    }

    h6 {
      font-size: 20px;
    }
  }
`;

export const StyledImage = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    transition: all 60s ease-out;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to top,
      #000000,
      transparent,
      transparent
    );
    content: '';
  }

  @media screen and (max-width: 1380px) {
    &:not(nth-child(1)) {
      height: 200px;
    }
  }

  @media screen and (max-width: 1140px) {
    height: 300px;
  }

  @media screen and (max-width: 460px) {
    height: 250px;
  }

  @media screen and (max-width: 380px) {
    height: 220px;
  }
`;
