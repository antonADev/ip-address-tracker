import React from 'react';

import {
  InfoElementContainer,
  TitleParagraph,
  Paragraph,
} from './info-element.styles';

const InfoElement = ({ infoTitle, infoData }) => {
  return (
    <InfoElementContainer>
      <TitleParagraph>{infoTitle}</TitleParagraph>
      <Paragraph>{infoData}</Paragraph>
    </InfoElementContainer>
  );
};

export default InfoElement;
