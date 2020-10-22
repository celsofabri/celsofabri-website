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

  h3 {
    position: absolute;
    bottom: 40px;
    left: 40px;
    z-index: 2;
    max-width: 50%;
    margin: 0;
    padding: 5px 10px;
    font-size: 28px;
    font-weight: 700;
    background-color: ${colors.white};
  }
`;
