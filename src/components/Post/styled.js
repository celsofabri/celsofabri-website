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
      color: inherit;
      background-color: inherit;

      h3 {
        color: ${colors.blue400};
      }

      img {
        transform: scale(2);
        transform: scale3d(2, 2, 2);
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
    transition: all 60s ease-out;
  }
`;
