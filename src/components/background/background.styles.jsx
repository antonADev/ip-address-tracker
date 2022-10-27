import styled from 'styled-components';
import backgroundImage from '../../images/pattern-bg.png';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

export const SmallBgnContainer = styled.div`
  position: relative;
  height: 40%;
  width: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const MapContainer = styled.div`
  height: 60%;
`;
