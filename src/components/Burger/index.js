import React from 'react';
import { StyledBurger, StyledBurgerItem } from './styled';

const Burger = ({ isMenuOpen, ...props }) => {
  return (
    <StyledBurger isMenuOpen={isMenuOpen} {...props}>
      <StyledBurgerItem />
    </StyledBurger>
  );
};

export default Burger;
