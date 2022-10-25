import styled from 'styled-components';
import { colors } from '../utilities/style';

export const FormContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 90%;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  & > * {
    height: 3.5rem;
  }
`;

export const InputBox = styled.input`
  width: 100%;
  border: none;
  border-radius: 15px;
`;

export const Button = styled.button`
  position: absolute;
  border-radius: 0 15px 15px 0;
  right: 0;
  z-index: 2;
  border: none;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.veryDarkGrey};
`;
