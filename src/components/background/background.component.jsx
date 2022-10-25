import React from 'react';

import { MainContainer, SmallBgnContainer } from './background.styles';

const Background = ({ children }) => {
  return (
    <MainContainer>
      <SmallBgnContainer>{children}</SmallBgnContainer>
    </MainContainer>
  );
};

export default Background;
