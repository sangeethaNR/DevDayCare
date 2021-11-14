import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me($username: String!) {
    me(username: $username) {
      _id
      username
      email
    }
  }
`;

export const GET_ALL_TEACHERS = gql`query getAllTeachersForAdmin {
  getAllTeachersForAdmin {
    _id
    email
    first_name
    last_name
    is_active
    is_main
    createdAt
    username
  }
}`