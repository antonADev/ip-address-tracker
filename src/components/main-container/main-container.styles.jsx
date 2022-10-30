import styled from 'styled-components';

export const Main = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 88vw;

  @media screen and (min-width: 756px) {
    gap: 3rem;
  }
`;
