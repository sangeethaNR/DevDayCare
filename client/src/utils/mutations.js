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



  mutation addPhoto($student_id: String, $imageUrl: String!,$desc : String!) {
    addPhoto(student_id: $student_id, imageUrl: $imageUrl,desc : $desc) {
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
mutation addActivity($activityType:String!,$desc:String!,$student_id:String) {
addActivity(activityType:$activityType,desc:$desc,student_id:$student_id)
{
  activityType
  day
  desc
  student_id
}
}
`
export const ADD_FOOD = gql`
mutation addFood($mealSession:String!,$mealDesc:String!,$student_id:String) {
  addFood(mealSession:$mealSession,mealDesc:$mealDesc,student_id:$student_id)
{
  _id
  mealSession
  day
  mealDesc
  student_id
}
}
`


export const ADD_NOTES = gql`
mutation addNotes($student_id: String,$noteDesc: String) {
  addNotes(student_id:$student_id,noteDesc:$noteDesc)
{
  _id
  student_id
  noteDesc
  day
}
}
`
export const ADD_INCIDENTREPORT = gql`
mutation addIncidentReport($student_id: String,$desc: String) {
  addIncidentReport(student_id:$student_id,desc:$desc)
{
  _id
  student_id
  desc
  day
}
}`

export const ADD_MEDICATION = gql`
mutation addMedication($_id: String,$medName : String,$dosage: String) {
  addMedication(_id:$_id,medName:$medName,dosage:$dosage)
{
  _id
  medications{
  dosage
  medName
  }
}
}`
