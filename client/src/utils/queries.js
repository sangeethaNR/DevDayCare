import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me($username: String!) {
    me(username: $username) {
      _id
      username
      email
    }
  }
`;

export const GET_ALL_TEACHERS = gql`
  query getAllTeachersForAdmin {
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
  }
`;

export const GET_TEACHER_PROFILE = gql`
  query getTeacherProfile($id: String!) {
    getTeacherProfile(id: $id) {
      first_name
      is_active
      _id
    }
  }
`;

export const GET_CLASS_INFO = gql`
  query getClassRooms($teacherId: String!) {
    getClassRoom(teacherId: $teacherId) {
      _id
      className
      students {
        _id
        name
        lastName
        middleName
        profilePic
        mealPlans {
          mealSession
        }
        parents {
          parentName
        }
      }
      activities {
        day
        _id
      }
      teachers {
        username
      }
    }
  }
`;

export const QUERY_PHOTOS = gql`
  query getPhotos($student_id: String) {
    getPhotos(student_id: $student_id) {
      _id
      student_id
      imageUrl
      day
      desc
    }
  }
`;

export const QUERY_ACTIVITY = gql`
  query getActivities($student_id: String) {
    getActivities(student_id: $student_id) {
      _id
      student_id
      day
      desc
      activityType
    }
  }
`;

export const QUERY_FOOD = gql`
  query getFood($student_id: String!) {
    getFood(student_id: $student_id) {
      _id
      student_id
      mealSession
      day
      mealDesc
    }
  }
`;

export const QUERY_MEDICATION = gql`
  query getMedication($_id: String!) {
    getMedication(_id: $_id) {
      _id

      medications {
        medName
        dosage
      }
    }
  }
`;
export const QUERY_NOTES = gql`
  query getNotes($student_id: String!) {
    getNotes(student_id: $student_id) {
      _id
      student_id
      noteDesc
      day
    }
  }
`;
export const QUERY_INCIDENTREPORT = gql`
  query getIncidentReport($student_id: String) {
    getIncidentReport(student_id: $student_id) {
      _id
      student_id
      desc
      day
    }
  }
`;

export const QUERY_STUDENT = gql`
  query getStudentProfile($id: String!) {
    getStudentProfile(id: $id) {
      _id
      dateOfBirth
      isPottyTrained
      name
      lastName
      middleName
      parents {
        parentName
        relation
        phoneNo
        address
      }
      emergencyContact {
        phoneNo
        contactPerson
        relationship
      }
      allergy
    }
  }
`;
