import styled from 'styled-components';
import { colors } from '../../utilities/style';

export const FormContainer = styled.div`
  width: 88vw;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  max-width: 35rem;
  position: relative;
  width: 100%;

  & > * {
    height: 3.5rem;
  }
`;

export const InputBox = styled.input`
  border: none;
  border-radius: 15px;
  font-family: inherit;
  font-size: 1.1rem;
  padding: 0 5rem 0 1.5rem;
  width: 100%;
  cursor: pointer;

  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: clamp(0.8rem, -0.875rem + 8.333vw, 1.2rem);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.veryDarkGrey};
  border: none;
  border-radius: 0 15px 15px 0;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1.8rem;
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  z-index: 2;
`;
