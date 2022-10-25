import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  FormContainer,
  Form,
  InputContainer,
  InputBox,
  Button,
} from './input.styles';

const Input = () => {
  const [ipAddress, setIpAddress] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <Form action='submit' onSubmit={handleSubmit}>
        <InputContainer>
          <InputBox required type='text' />
          <Button type='submit'>
            <MdKeyboardArrowRight />
          </Button>
        </InputContainer>
      </Form>
    </FormContainer>
  );
};

export default Input;
