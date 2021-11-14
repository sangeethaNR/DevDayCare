// Not Used because could not figure out how to refactor resolvers/typeDefs to corresponding items

const { gql } = require('apollo-server-express');

module.exports = `
type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me(username: String!): User
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;
