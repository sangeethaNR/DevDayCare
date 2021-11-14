const { gql } = require('apollo-server-express');
//const {makeExecutableSchema} = require("graphql-tools")

const typeDefs = gql`
  ## Admin def
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
  type TeachersAuth {
    token: ID!
    user: Teacher
  }

  ## Teacher def
  type Teacher {
    _id: ID
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    is_main: Boolean
  }

  input TeacherInput {
    _id: ID
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    is_main: Boolean
  }

  ## Student Def
  type Student {
    name: String!
    middleName: String
    lastName: String
    dateOfBirth: String!
    joinedOn: String!
    allergy: [String]
    isPottyTrained: Boolean!
    parents: [ParentTypes]
    emergencyContact: [EmergencyContactTypes]
    physician: [PhysicianTypes]
    medications: [MedicationTypes]
    mealPlans: [Food]
  }

  ##Food def
  type Food {
    mealSession: String!
    day: String!
    mealDesc: String!
  }

  ## Classrooms def
  type ClassRooms {
    className: String!
    teachers: [Teacher]
    students: [Student]
    activities: [Activity]
  }

  ## Activity def
  type Activity {
    activityType: String!
    day: String!
    desc: String!
  }

  ## IncidentReport def
  type IncidentReport {
    desc: [String!]
    day: String!
    studentId: ID!
  }

  ## Notes def
  type Notes {
    noteDesc: [String!]
    day: String!
    student_id: ID!
  }

  ##Input Types
  input FoodInput {
    mealSession: String!
    day: String!
    mealDesc: String!
  }

  input ActivityInput {
    activityType: String!
    day: String!
    desc: String!
  }

  input IncidentReportInput {
    desc: [String!]
    day: String!
    studentId: ID!
  }

  input NotesInput {
    noteDesc: [String!]
    day: String!
    student_id: ID!
  }

  type ParentTypes {
    parentName: String!
    phoneNo: Int!
    address: String!
    relation: String!
  }

  type EmergencyContactTypes {
    contactPerson: String!
    relationship: String!
    phoneNo: Int!
  }

  type PhysicianTypes {
    physicianName: String!
    medicalRecordNo: Int!
    address: String!
    phoneNo: String!
  }

  type MedicationTypes {
    medName: String!
    dosage: String!
    profilePic: String!
  }

  type Blog {
    title: String!
    content: String!
    likes: Int!
    date: String
  }

  ## queries
  type Query {
    me(username: String!): User
    getTeacherProfile(id: String!): Teacher
    getStudentProfile(id: String): Student
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    createTeacher(username: String!, email: String!, password: String!, first_name: String!, last_name: String!, is_main: Boolean!): TeachersAuth
    loginTeacher(email: String!, password: String!): TeachersAuth
  }
`;

module.exports = typeDefs;