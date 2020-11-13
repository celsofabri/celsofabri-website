import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  StyledExperienceItem,
  StyledExperienceHead,
  StyledExperienceLink,
  StyledExperienceInfo,
  StyledExperienceRole,
  StyledExperienceContent
} from './styled';

const Experience = ({ company }) => {
  const {
    name,
    url,
    logo,
    role,
    startDate,
    endDate,
    resume
  } = company;

  const formatDate = (value) => {
    const dateReplaced = value.replace('-', '/');
    const date = new Date(dateReplaced);
    const options = {
      month: 'long',
      year: 'numeric'
    };

    return date.toLocaleDateString('pt-BR', options);
  };

  return (
    <StyledExperienceItem>
      <StyledExperienceHead>
        {logo?.url && (
          <StyledExperienceLink
            href={url}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo?.url} width="80" height="80" alt={name} />
          </StyledExperienceLink>
        )}

        <StyledExperienceInfo>
          {name && <h4>{name}</h4>}
          {role && <h5>{role}</h5>}
          {(startDate || endDate) && (
            <p>
              {startDate && formatDate(startDate)} -{' '}
              {(endDate && formatDate(endDate)) || 'Até o momento'}
            </p>
          )}
        </StyledExperienceInfo>
      </StyledExperienceHead>
      <StyledExperienceContent>
        <ReactMarkdown>{resume?.markdown}</ReactMarkdown>
      </StyledExperienceContent>
    </StyledExperienceItem>
  );
};

export default Experience;
