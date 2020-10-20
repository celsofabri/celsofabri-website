import React from 'react';
import Logo from 'components/Logo';
import { StyledWrapper } from 'assets/global/styled';
import { StyledHeader } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <Logo />
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
