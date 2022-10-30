import styled from 'styled-components';
import backgroundImage from '../../images/pattern-bg.png';

export const MainContainer = styled.div`
  height: 100%;
  width: 100vw;
`;

export const SmallBgnContainer = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 35%;
  width: 100%;
`;

export const MapContainer = styled.div`
  height: 65%;
`;
