require('dotenv').config();

import { testdata } from '../../helpers';
import { accountsRequests, courseRequests } from '../../requests';
import { generate } from 'randomstring';


// To store the dynamically generated email and password
let userDetails = {};

// To store user Token and ID
let userInfo = {}

// Study set info
const studySetName = `Study set ${generate(6)}`;
let studySetId;

describe('Accounts', () => {
  test('Should register with email', async () => {
    userDetails = {
      email: testdata.userdata.email,
      password: testdata.userdata.password
    };
    const request = await accountsRequests.register(userDetails.email, userDetails.password);
    expect(request.status).toBe(201);
  });

  test('Should login with registered email and password', async () => {
    const request = await accountsRequests.login(userDetails.email, userDetails.password);
    expect(request.status).toBe(200);
    expect(request.data).toHaveProperty('id');
    expect(request.data).toHaveProperty('token');
    userInfo = request.data;
  });
});

describe('Study set', () => {
  test('Should create a study set', async () => {
    const request = await courseRequests.createStudySet(studySetName, userInfo);
    expect(request.status).toBe(201);
    expect(request.data).toHaveProperty('id');
    expect(request.data).toHaveProperty('name', studySetName);
    studySetId = request.data.id;
  });

  test('Should get the created study set', async () => {
    const request = await courseRequests.getStudySet(studySetId, userInfo);
    expect(request.status).toBe(200);
    expect(request.data).toHaveProperty('id', studySetId);
    expect(request.data).toHaveProperty('name', studySetName);
  });
});
