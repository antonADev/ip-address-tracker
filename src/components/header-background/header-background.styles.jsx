import styled from 'styled-components';
import backgroundImage from '../../images/pattern-bg.png';

export const SmallBgnContainer = styled.header`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 35%;
  width: 100%;
  background-color: black;
`;
