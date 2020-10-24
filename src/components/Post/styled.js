import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledPost = styled.div`
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

  @media screen and (max-width: 460px) {
    a {
      h3 {
        font-size: 20px;
      }
    }
  }
`;

export const StyledImage = styled.div`
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

  @media screen and (max-width: 1380px) {
    height: 200px;
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
