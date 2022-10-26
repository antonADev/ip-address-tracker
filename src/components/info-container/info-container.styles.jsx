import styled from 'styled-components';
import { colors } from '../../utilities/style';
export const InfoContainer = styled.div`
  background-color: ${colors.white};
  width: 100%;
  border: none;
  border-radius: 15px;
  min-height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.7rem;
  z-index: 99;
`;
