import styled from 'styled-components';
import { colors } from '../../utilities/style';

export const InfoContainer = styled.div`
  background-color: ${colors.white};
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.status === 'loading' ? 'center' : 'space-around'};
  align-items: ${(props) => (props.status === 'loading' ? 'center' : null)};
  min-height: 290px;
  max-width: 1100px;
  padding: 0.7rem 1rem;
  position: relative;
  width: 100%;
  z-index: 99;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    height: 10rem;
    max-height: 15rem;
    min-height: 10rem;
    padding: 0;
    & > *:not(:last-child) {
      border-right: 1px solid hsl(0, 0%, 85%);
    }
  }
`;
