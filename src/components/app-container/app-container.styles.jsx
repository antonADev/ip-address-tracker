import styled from 'styled-components';

export const Main = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  top: 0;
  margin-top: 85px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 88vw;

  @media screen and (min-width: 768px) {
    gap: 3rem;
    margin-top: 95px;
  }
`;
