require('dotenv').config();

import axios from 'axios';
import { endpoints } from './endpoints';
import { baseUrl, basicHeaders } from '../helpers/common';

export const register = async (email, password) => {
  const options = {
    endpoint: `${baseUrl}${endpoints.accounts.authentication.register}`,
    data: { 
      email: email, 
      password: password,
      course_of_studies: null,
      delayed_confirmation_possible: true,
      language: "en",
      platform: "web",
      signup_location: "webapp",
      university: null
    },
    config: {
      ...basicHeaders
    }
  };
  const registerResponse = await axios.post(options.endpoint, options.data, options.config);
  return registerResponse;
};

export const login = async (email, password) => {
  const options = {
    endpoint: `${baseUrl}${endpoints.accounts.authentication.login}`,
    data: { 
      username: email, 
      password: password 
    },
    config: {
      ...basicHeaders
    }
  };
  const loginResponse = await axios.post(options.endpoint, options.data, options.config);
  return loginResponse;
};
