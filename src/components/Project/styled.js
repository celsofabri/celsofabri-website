import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledProject = styled.div`
  display: inline-block;
  max-width: 45%;
  margin: 2.5%;

  a {
    display: inline-block;
    text-decoration: none;

    h3 {
      font-size: 28px;
      font-weight: 700;
      line-height: 1.4;
    }

    &:hover {
      color: initial;
      background-color: initial;

      h3 {
        color: ${colors.blue400};
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

  @media screen and (max-width: 1380px) {
    a {
      h3 {
        font-size: 24px;
      }
    }
  }

  @media screen and (max-width: 1140px) {
    display: block;
    max-width: 100%;
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
    object-position: top center;
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
`;
