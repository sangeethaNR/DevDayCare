import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CHANGE_TEACHER_STATUS = gql`
  mutation changeTeacherStatus($id: String!, $status: Boolean!) {
    changeTeacherStatus(id: $id, status: $status) {
      user {
        _id
        is_active
        email
      }
    }
  }
`;

export const CREATE_TEACHER = gql`
  mutation createTeacher(
    $email: String!
 
    $username: String!
    $first_name: String!
    $last_name: String!
    $is_main: Boolean!
  ) {
    createTeacher(
      email: $email
 
      username: $username
      first_name: $first_name
      last_name: $last_name
      is_main: $is_main
    ) {
      user {
        _id
        email
        username
      }
      token
    }
  }
`;
