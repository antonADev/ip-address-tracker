import React from 'react';

import { Main } from './app-container.styles';
const AppContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

export default AppContainer;
