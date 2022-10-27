import React from 'react';
import MapComponent from '../map/map.component';

import {
  MainContainer,
  SmallBgnContainer,
  MapContainer,
} from './background.styles';

const Background = ({ children }) => {
  return (
    <MainContainer>
      <SmallBgnContainer>{children}</SmallBgnContainer>
      <MapContainer>
        <MapComponent />
      </MapContainer>
    </MainContainer>
  );
};

export default Background;
