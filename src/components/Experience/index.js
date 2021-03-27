import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
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

  const formatDate = (date) => {
    return format(new Date(date), 'MMMM yyyy', {
      locale: ptBR
    });
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
              {endDate ? formatDate(endDate) : 'até o momento'}
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
