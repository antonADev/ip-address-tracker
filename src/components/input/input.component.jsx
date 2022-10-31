import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { fetchSearchedData } from '../../features/ipDataSlice';
import {
  FormContainer,
  Form,
  InputContainer,
  InputBox,
  Button,
} from './input.styles';
import { IP_REGEX_EXP, URL_REGEX_EXP } from '../../constants/constants';

const Input = () => {
  const [ipAddress, setIpAddress] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (IP_REGEX_EXP.test(ipAddress))
      dispatch(fetchSearchedData(`&ipAddress=${ipAddress}`));
    if (URL_REGEX_EXP.test(ipAddress))
      dispatch(fetchSearchedData(`&domain=${ipAddress}`));
    return;
  };

  const handleChange = (e) => {
    setIpAddress(e.target.value);
  };

  return (
    <FormContainer>
      <Form action='submit' onSubmit={handleSubmit}>
        <InputContainer>
          <InputBox
            value={ipAddress}
            required
            type='text'
            placeholder='Search for any IP address or domain'
            onChange={handleChange}
          />
          <Button aria-label='submit button' type='submit'>
            <MdKeyboardArrowRight />
          </Button>
        </InputContainer>
      </Form>
    </FormContainer>
  );
};

export default Input;
