import styled from 'styled-components';
import { colors } from '../../utilities/style';

export const InfoElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleParagraph = styled.p`
  color: ${colors.darkGrey};
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.4rem;
`;

export const Paragraph = styled.p`
  color: ${colors.veryDarkGrey};
  font-size: 1.3rem;
  font-weight: 500;
`;
