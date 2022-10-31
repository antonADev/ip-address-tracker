import React from 'react';
import { useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';

import { colors } from '../../utilities/style';
import { InfoContainer } from './info-container.styles';
import InfoElement from '../info-element/info-element.component';

const Info = () => {
  const { status, data, message } = useSelector((state) => state.ipData);

  return (
    <>
      {status === 'loading' ? (
        <InfoContainer status={status}>
          <FadeLoader color={colors.darkGrey} />
        </InfoContainer>
      ) : null}
      {status === 'idle' && data ? (
        <>
          <InfoContainer status={status}>
            <InfoElement infoTitle={'IP ADDRESS'} infoData={data.ip} />
            <InfoElement
              infoTitle={'LOCATION'}
              infoData={`${data.location.city}, ${data.location.region} ${
                data.location.postalCode ? data.location.postalCode : ''
              }`}
            />
            <InfoElement
              infoTitle={'TIMEZONE'}
              infoData={`UTC ${data.location.timezone}`}
            />
            <InfoElement infoTitle={'ISP'} infoData={data.isp} />
          </InfoContainer>
        </>
      ) : null}
      {status === 'error' ? <p>${message}</p> : null}
    </>
  );
};

export default Info;
