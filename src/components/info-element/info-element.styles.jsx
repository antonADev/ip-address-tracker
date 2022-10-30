import styled from 'styled-components';
import { colors } from '../../utilities/style';

export const InfoElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 756px) {
    align-items: flex-start;
    justify-content: flex-start;
    height: 50%;
    margin: 0 0.5rem 0 1.5rem;
    text-align: left;
  }
`;

export const TitleParagraph = styled.p`
  color: ${colors.darkGrey};
  font-size: clamp(0.6rem, -0.875rem + 3.333vw, 0.8rem);
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.4rem;
`;

export const Paragraph = styled.p`
  color: ${colors.veryDarkGrey};
  font-size: clamp(1.25rem, -0.875rem + 3.333vw, 1.6rem);
  font-weight: 500;
`;
