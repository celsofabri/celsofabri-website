import styled from 'styled-components';

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

  @media screen and (max-width: 768px) {
    h4 {
      font-size: 24px;
    }

    h5 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 520px) {
    h4 {
      font-size: 18px;
    }

    h5 {
      font-size: 14px;
    }
  }
`;

export const StyledExperienceContent = styled.div`
  display: block;
`;
