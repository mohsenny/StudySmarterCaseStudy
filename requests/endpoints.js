export const endpoints = {
  accounts: {
    authentication: {
      register: '/users/',
      login: '/api-token-auth/'
    },
    course: {
      createStudySet: '/users/:userId/course-subjects/',
      getStudySet: '/users/:userId/course-subjects/:setId',
    }
  }
};
