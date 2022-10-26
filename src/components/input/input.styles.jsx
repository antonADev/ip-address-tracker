import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { colors } from '../../utilities/style';

export const FormContainer = styled.div`
  width: 88vw;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  & > * {
    height: 3.6rem;
  }
`;

export const InputBox = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-radius: 15px;
  padding-left: 1.5rem;
  font-size: 1.1rem;
`;

export const Button = styled.button`
  border-radius: 0 15px 15px 0;
  top: 0;
  right: 0;
  z-index: 2;
  border: none;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.veryDarkGrey};
  width: 17%;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
