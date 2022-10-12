export const baseUrl = 'https://be.dev.studysmarter-test.de';

export const basicHeaders = {
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json' 
  }
};

export const authHeader = function (token) {
  return { 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${token}`
    }
  };
};
