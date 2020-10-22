import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledProjects = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: -2.5%;
`;

export const StyledHeader = styled.header`
  position: relative;
  display: block;
  width: 100%;
  height: 350px;
  margin-bottom: 60px;

  img {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const StyledInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 6;
  margin: 0;

  h3 {
    display: table;
    margin: 0;
    padding: 0 5px;
    font-size: 20px;
    font-weight: 600;
    color: ${colors.gray400};
    line-height: 1.4;
    background-color: ${colors.white};
  }

  h6 {
    display: table;
    margin: 0;
    padding: 0 5px;
    font-size: 28px;
    font-weight: 700;
    color: ${colors.gray400};
    line-height: 1.4;
    background-color: ${colors.white};

    a {
      text-decoration: none;

      &:hover {
        color: ${colors.blue400};
        background-color: initial;
      }
    }
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
