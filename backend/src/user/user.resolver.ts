import { getUser } from './getUser';
import { getUsers } from './getUsers';
import { createUser } from './createUser';
import { Resolvers } from '../graphql/resolvers-types';
import { register } from './register';
import { login } from './login';
import { forgotPassword } from './forgotPassword';
import { resetPassword } from './resetPassword';

const resolver: Resolvers = {
  Query: {
    user: getUser,
    users: getUsers,
  },
  Mutation: {
    createUser,
    register,
    login,
    forgotPassword,
    resetPassword,
  },
};

export default resolver;