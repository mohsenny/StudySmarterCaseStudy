import { generate } from 'randomstring';

export const userdata = {
  email: `test-uset-${generate(6)}@email.com`,
  password: generate(20)
};
