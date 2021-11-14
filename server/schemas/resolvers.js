const { AuthenticationError } = require("apollo-server-express");
const { User, Teacher } = require("../models");
const { signToken } = require("../utils/auth");

async function loginFunction(Schema, email, password) {
  const user = await Schema.findOne({ email });
  if (!user) {
    throw new AuthenticationError("Can't find this user");
  }
  const correctPw = await user.isCorrectPassword(password);

  if (!correctPw) {
    throw new AuthenticationError("Wrong password!");
  }
  const token = signToken(user);
  return { token, user };
}

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const foundUser = await User.findOne({ _id: context.user._id });
      if (!foundUser) {
        throw new AuthenticationError("Cannot find a user with this id!");
      }
      return foundUser;
    },
    getTeacherProfile: async (parent, args, context) => {},
    getStudentProfile: async (parent, args, context) => {},
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      return await loginFunction(User, email, password);
    },
    createTeacher: async (parent, { username, email, password, first_name, last_name, is_main }) => {
      const user = await Teacher.create({ username, email, password, first_name, last_name, is_main });
      const token = signToken(user);
      return { token, user };
    },
    loginTeacher: async (parent, { email, password }) => {
      return await loginFunction(Teacher, email, password);
    },
  },
};

module.exports = resolvers;
