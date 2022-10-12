require('dotenv').config();

import axios from 'axios';
import { endpoints } from './endpoints';
import { baseUrl, authHeader } from '../helpers/common';

export const createStudySet  = async (name, userInfo) => {
  const options = {
    endpoint: `${baseUrl}${endpoints.accounts.course.createStudySet}`.replace(':userId', userInfo.id),
    data: {
      name: name,
      colorId: 3,
      shared: true,
      exam_date: null,
      countries: [],
      level: 0,
    },
    config: {
      ...authHeader(userInfo.token)
    }
  };
  const createSetResponse = await axios.post(options.endpoint, options.data, options.config);
  return createSetResponse;
};

export const getStudySet  = async (id, userInfo) => {
  const options = {
    endpoint: `${baseUrl}${endpoints.accounts.course.getStudySet}`
      .replace(':userId', userInfo.id)
      .replace(':setId', id),
    config: {
      ...authHeader(userInfo.token)
    }
  };
  const createSetResponse = await axios.get(options.endpoint, options.config);
  return createSetResponse;
};