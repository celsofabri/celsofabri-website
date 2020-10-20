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
`;

export const StyledHomeContent = styled.article`
  position: absolute;
  z-index: 9;
  display: block;
  text-align: right;
  margin-right: -200px;

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
`;
