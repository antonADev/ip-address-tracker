import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../store/ipDataSlice';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { useGetIpBySearchQuery } from '../../store/ipDataSlice';

import {
  FormContainer,
  Form,
  InputContainer,
  InputBox,
  Button,
} from './input.styles';
import { IP_REGEX_EXP } from '../../constants/constants';

const Input = () => {
  const [ipAddress, setIpAddress] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!IP_REGEX_EXP.test(ipAddress)) return;
    // dispatch(fetchData(ipAddress));
  };

  const handleChange = (e) => {
    setIpAddress(e.target.value);
    console.log(ipAddress);
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
          <Button type='submit'>
            <MdKeyboardArrowRight />
          </Button>
        </InputContainer>
      </Form>
    </FormContainer>
  );
};

export default Input;
