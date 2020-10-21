import styled from 'styled-components';

export const StyledSocial = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
  margin: 30px -15px;
`;

export const StyledSocialItem = styled.li`
  margin: 15px;
  line-height: 0;

  a {
    display: inline-block;
    transition: all 0.4s ease-out;

    &:hover {
      background-color: inherit;
      transform: scale(0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
  }
`;
