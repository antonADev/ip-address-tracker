import styled from 'styled-components';
import { colors } from '../../utilities/style';

export const HeaderContainer = styled.div`
  padding: 1.7rem 0;

  @media screen and (min-width: 768px) {
    padding-top: 1.8rem;
  }
`;

export const HeaderText = styled.h1`
  color: ${colors.white};
  font-size: clamp(1.6rem, -0.875rem + 8.333vw, 2rem);
  font-weight: 500;
`;
