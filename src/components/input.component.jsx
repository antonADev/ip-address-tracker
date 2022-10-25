import React from 'react';

import {
  FormContainer,
  Form,
  InputContainer,
  InputBox,
  Button,
} from './input.styles';

const Input = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <Form action='submit'>
        <InputContainer>
          <InputBox type='text' />
          <Button onClick={handleSubmit}>Hello</Button>
        </InputContainer>
      </Form>
    </FormContainer>
  );
};

export default Input;
