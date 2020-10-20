import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledResume = styled.div`
  h3 {
    margin: 0;
    font-size: 36px;
    font-weight: 700;
    color: ${colors.gray400};
  }
`;

export const StyledExperience = styled.ul`
  display: block;
  width: 100%;
  padding: 0;
  list-style-type: none;
`;

export const StyledExperienceItem = styled.li`
  margin: 100px 0;
`;

export const StyledExperienceHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  img {
    display: inline-block;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const StyledExperienceLink = styled.a`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-right: 30px;
`;

export const StyledExperienceInfo = styled.div`
  display: block;
  width: calc(100% - 120px);
  line-height: 1.4;

  h4 {
    margin: 0;
    font-size: 32px;
  }

  h5 {
    margin: 0;
    font-size: 18px;
    font-weight: 300;
  }

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const StyledExperienceContent = styled.div`
  display: block;
`;
