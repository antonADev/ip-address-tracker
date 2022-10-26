import React from 'react';
import { InfoContainer } from './info-container.styles';
import InfoElement from '../info-element/info-element.component';
import { useSelector } from 'react-redux';

const Info = () => {
  const ipState = useSelector((state) => state.ipData.ipData);
  console.log(ipState);
  const statusState = useSelector((state) => state.ipData.status);
  console.log(statusState);
  return Object.keys(ipState).length ? (
    <InfoContainer>
      <InfoElement infoTitle={'IP ADDRESS'} infoData={ipState.ip} />
      <InfoElement
        infoTitle={'LOCATION'}
        infoData={`${ipState.location.city}, ${ipState.location.region} ${
          ipState.location.postalCode ? ipState.location.postalCode : ''
        }`}
      />
      <InfoElement
        infoTitle={'TIMEZONE'}
        infoData={`UTC ${ipState.location.timezone}`}
      />
      <InfoElement infoTitle={'ISP'} infoData={ipState.isp} />
    </InfoContainer>
  ) : (
    ''
  );
};

export default Info;
