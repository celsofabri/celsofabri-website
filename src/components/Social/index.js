import React from 'react';
import { StyledSocial, StyledSocialItem } from './styled';
import social from './constants';

const Social = () => {
  return (
    <StyledSocial>
      {social.map((item, index) => {
        const { name, url, image } = item;

        return (
          <StyledSocialItem key={`social-${index}`}>
            <a
              href={url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image} width="36" height="auto" alt={name} />
            </a>
          </StyledSocialItem>
        );
      })}
    </StyledSocial>
  );
};

export default Social;
