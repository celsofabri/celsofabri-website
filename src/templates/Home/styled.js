import styled from 'styled-components';

export const StyledHome = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
`;

export const StyledHomeSidebar = styled.aside`
  display: block;
  width: 25%;
`;

export const StyledHomeContent = styled.article``;

export const StyledHomeImage = styled.div`
  width: 75%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
