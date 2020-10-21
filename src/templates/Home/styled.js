import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledHome = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
`;

export const StyledHomeSidebar = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  height: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }
`;

export const StyledHomeContent = styled.article`
  position: absolute;
  z-index: 9;
  display: block;
  text-align: right;
  margin-right: -200px;
  padding: 0 0 50px 0;

  h2 {
    margin: 5px;
    padding: 5px;
    font-size: 90px;
    font-weight: 900;
    text-transform: uppercase;
    background-color: ${colors.white};
  }

  p {
    margin: 5px;
    padding: 5px;
    font-size: 30px;
    font-weight: 100;
    background-color: ${colors.white};
  }

  @media screen and (max-width: 1160px) {
    margin-right: 0;
    text-align: center;

    h2 {
      font-size: 80px;
      line-height: 1;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    text-align: center;

    h2 {
      font-size: 60px;
    }

    p {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 480px) {
    margin-right: 0;
    text-align: center;

    h2 {
      font-size: 42px;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 360px) {
    margin-right: 0;
    text-align: center;

    h2 {
      font-size: 36px;
    }
  }
`;

export const StyledHomeImage = styled.div`
  width: 60%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
  }
`;
