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
query getPhotos($student_id:String){
  getPhotos(student_id : $student_id){
    _id
    student_id
    imageUrl
    day
  }
}
`;
