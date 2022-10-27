import React from 'react';
import { InfoContainer } from './info-container.styles';
import InfoElement from '../info-element/info-element.component';
import { useSelector } from 'react-redux';

import { useGetStartingIpQuery } from '../../store/ipDataSlice';
//UNCOMMENT FOR USING createAsyncThunk
// const Info = () => {
//   const ipState = useSelector((state) => state.ipData.ipData);
//   console.log(ipState);
//   const statusState = useSelector((state) => state.ipData.status);
//   console.log(statusState);
//   return Object.keys(ipState).length ? (
//     <InfoContainer>
//       <InfoElement infoTitle={'IP ADDRESS'} infoData={ipState.ip} />
//       <InfoElement
//         infoTitle={'LOCATION'}
//         infoData={`${ipState.location.city}, ${ipState.location.region} ${
//           ipState.location.postalCode ? ipState.location.postalCode : ''
//         }`}
//       />
//       <InfoElement
//         infoTitle={'TIMEZONE'}
//         infoData={`UTC ${ipState.location.timezone}`}
//       />
//       <InfoElement infoTitle={'ISP'} infoData={ipState.isp} />
//     </InfoContainer>
//   ) : (
//     ''
//   );
// };

const Info = () => {
  // const { data, error, isLoading } = useGetStartingIpQuery();
  // console.log(data);
  const InitialRender = () => {
    const { data, error, isLoading } = useGetStartingIpQuery();
    return error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <>Loading...</>
    ) : data ? (
      <>
        <InfoElement infoTitle={'IP ADDRESS'} infoData={data.ip} />
        <InfoElement
          infoTitle={'LOCATION'}
          infoData={`${data.location.city}, ${data.location.country} ${
            data.location.postalCode.length ? data.location.postalCode : ''
          }`}
        />
        <InfoElement
          infoTitle={'TIMEZONE'}
          infoData={`UTC ${data.location.timezone}`}
        />
        <InfoElement infoTitle={'ISP'} infoData={`${data.isp}`} />
      </>
    ) : null;
  };
  return (
    <InfoContainer>
      {<InitialRender />}
      {/* <h1>Hola</h1> */}
    </InfoContainer>
  );
};

export default Info;
