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
    $password: String!
    $username: String!
    $first_name: String!
    $last_name: String!
    $is_main: Boolean!
  ) {
    createTeacher(
      email: $email
      password: $password
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

export const LOGIN_TEACHER = gql`
  mutation loginTeacher($email: String!, $password: String!) {
    loginTeacher(email: $email, password: $password) {
      user {
        _id
        email
        password
      }
      token
    }
  }
`;

export const ADD_PHOTO = gql`



  mutation addPhoto($student_id: String, $imageUrl: String!) {
    addPhoto(student_id: $student_id, imageUrl: $imageUrl) {
      student_id
      imageUrl
      day
    }
  }
`;

export const CREATE_CLASS = gql`
  mutation createClass($teacher_id: String!, $className: String!) {
    createClass(teacher_id: $teacher_id, className: $className) {
      className
      teachers {
        _id
      }
    }
  }
`;

export const ADD_STUDENT = gql`
mutation addStudent($studentInput: StudentInput!, $class_id: String!) {
  addStudent(studentInput: $studentInput, class_id: $class_id){
    _id
    name
    dateOfBirth
    allergy
    parents {
      parentName
    }
    emergencyContact {
      contactPerson
    }
    physician {
      physicianName
      phoneNo
    }
    medications {
      medName
    }
    mealPlans {
      mealSession
    }

  }
}
`
export const ADD_ACTIVITY = gql`
mutation addActivity($activityType:String!,$day:String,$desc:String!,$student_id:String) {
addActivity(activityType:$activityType,day:$day,desc:$desc,student_id:$student_id)
{
  activityType
  day
  desc
  student_id
}
}
`
