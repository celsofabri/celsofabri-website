import React from 'react';
import { Link } from 'gatsby';
import { StyledMenu, StyledMenuList, StyledMenuItem } from './styled';

const Menu = ({ isMenuOpen }) => {
  return (
    <StyledMenu isMenuOpen={isMenuOpen}>
      <StyledMenuList>
        <StyledMenuItem>
          <Link to="/resume" title="Resume">
            Resume
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/jobs" title="jobs">
            jobs
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/blog" title="blog">
            blog
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/contact" title="contact">
            contact
          </Link>
        </StyledMenuItem>
      </StyledMenuList>
    </StyledMenu>
  );
};

export default Menu;
