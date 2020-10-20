import React from 'react';
import { Link } from 'gatsby';
import { StyledMenu, StyledMenuList, StyledMenuItem } from './styled';

const Menu = ({ isMenuOpen }) => {
  return (
    <StyledMenu isMenuOpen={isMenuOpen}>
      <StyledMenuList>
        <StyledMenuItem>
          <Link to="/sobre" title="Sobre">
            Sobre
          </Link>
        </StyledMenuItem>
        {/*<StyledMenuItem>
                  <Link to="/trabalhos" title="jobs">
                    Trabalhos
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Link to="/blog" title="blog">
                    Blog
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Link to="/contato" title="contato">
                    Contato
                  </Link>
                </StyledMenuItem>*/}
      </StyledMenuList>
    </StyledMenu>
  );
};

export default Menu;
