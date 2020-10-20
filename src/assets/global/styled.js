import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledWrapper = styled.div`
  display: block;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const StyledPage = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
`;

export const StyledSidebar = styled.aside`
  width: 35%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledContent = styled.article`
  display: block;
  width: 65%;
  height: 100vh;
  padding: 100px 48px;
  overflow: auto;

  p {
    font-size: 16px;
    font-weight: 300;
    color: ${colors.gray400};

    strong {
      font-weight: 700;
    }
  }

  a {
    display: inline-block;
    color: ${colors.gray400};

    &:hover {
      color: ${colors.white};
      background-color: ${colors.red400};
    }
  }
`;

export const StyledTitle = styled.h2`
  position: relative;
  font-size: 50px;
  font-weight: 900;
  color: ${colors.gray400};
  text-transform: uppercase;

  &:before {
    margin-right: 10px;
    content: '/';
  }
`;
