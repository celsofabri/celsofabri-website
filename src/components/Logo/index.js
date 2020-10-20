import React from 'react';
import { Link } from 'gatsby';
import { StyledLogo } from './styled';
import LogoCelsoFabri from 'assets/images/general/logo.svg';

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/" title="Celso Fabri">
        <img src={LogoCelsoFabri} alt="Celso Fabri" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
