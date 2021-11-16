const { gql } = require('apollo-server-express');
//const {makeExecutableSchema} = require("graphql-tools")

const typeDefs = gql`
  ## Admin def
  type User {
    _id: ID
    username: String
    email: String
    password: String
    is_active: Boolean
    is_admin:Boolean
  }
  type Auth {
    token: ID!
    user: User
  }
  type TeachersAuth {
    token: ID
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
    is_active: Boolean
    classRooms: [ClassRooms]
    createdAt: String
  }

  input TeacherInput {
    _id: ID
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    is_main: Boolean
    is_active: Boolean
  }

  ## Student Def
  type Student {
    _id: ID!
    name: String!
    middleName: String!
    lastName: String!
    dateOfBirth: String!
    joinedOn: String!
    allergy: [String]
    isPottyTrained: Boolean!
    parents: [ParentTypes!]
    emergencyContact: [EmergencyContactTypes!]
    physician: [PhysicianTypes!]
    medications: [MedicationTypes]
    mealPlans: [Food!]
    profilePic: String!
  }

  input StudentInput {
    name: String!
    middleName: String!
    lastName: String!
    dateOfBirth: String!
    joinedOn: String!
    allergy: [String]
    isPottyTrained: Boolean!
    parents: [ParentInput!]
    emergencyContact: [EmergencyContactInput!]
    physician: [PhysicianInput!]
    medications: [MedicationInput!]
    mealPlans: [FoodInput!]
    profilePic: String!
  }

  

  ## Classrooms def
  type ClassRooms {
    _id: ID!
    className: String!
    teachers: [Teacher]
    students: [Student]
    activities: [Activity]
  }



  ## IncidentReport def
  type IncidentReport {
    _id: ID!
    desc: [String!]
    day: String!
    studentId: ID!
  }

  ## Notes def
  type Notes {
    noteDesc: [String!]
    day: String!
    student_id: ID!
    _id: ID!
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
    desc: [String!]
    classRoom_id: String!
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

  input ParentInput {
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
  input EmergencyContactInput {
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
  input PhysicianInput {
    physicianName: String!
    medicalRecordNo: Int!
    address: String!
    phoneNo: String!
  }
  type classRoom{
    className : String!
    teachers:[Teachers]
    students:[Profile]
    activities:[Activity]
    mealPlans:[Food]
    _id: ID!
 }
 type Teachers{
   first_name:String!
   last_name:String!
   username:String!
   email:String!
   password: String
   is_main: Boolean!
   is_active:Boolean
   classRooms:[classRoom]
 }
 scalar Date
 type Profile{
   name :String!
   dateOfBirth:Date!
   joinedOn:Date!
 }
 type Activity{
  activityType: String!
 day:String
  desc:String!
  _id: ID!
 }
 type Food{
  mealSession :String!
  day:String
  time:String
  mealDesc:String!
 }
  type MedicationTypes {
    medName: String!
    dosage: String!
  }
  type Photo{
    _id : ID
    student_id : String
    day : String
    imageUrl:String!
  }
  input MedicationInput {
    medName: String!
    dosage: String!
  }

  ## queries
  type Query {
    me(username: String!): User
    getClassRoom(teacherId: String!):[ClassRooms]
    getTeacherProfile(id: String!): Teacher
    getStudentProfile(id: String!): Student
    getAllTeachersForAdmin: [Teacher]
    getStudentMedicalInfo(id: String!): Student
    getPhotos(student_id: String) : [Photo]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(email: String!, password: String, username: String!): Auth
    changeTeacherStatus(id: String!, status: Boolean!): TeachersAuth
    createTeacher(username: String!, email: String!, password: String!, first_name: String!, last_name: String!, is_main: Boolean!): TeachersAuth
    loginTeacher(email: String!, password: String!): TeachersAuth
    createClass(teacher_id: String!, className: String!): ClassRooms
    addClassActivities(activityInput: ActivityInput!): Activity
    addStudent(studentInput: StudentInput, class_id: String!): Student
    addStudentNotes(notesInput: NotesInput!): Notes
    addStudentIncidentReports(incidentReportInput: IncidentReportInput!): IncidentReport
    addStudentMedication(medication: MedicationInput!, student_id: String!): Student
    addClassRooms(className : String!): classRoom
    addFood(mealSession:String!,mealDesc:String!):Food
    addActivity(activityType:String!,desc:String!):Activity
    addTeacher(username: String!, email: String!, first_name: String!, last_name: String!, is_main: Boolean!,is_active: Boolean): Teachers
  addPhoto(student_id: String,imageUrl: String!):Photo
  }
`;

module.exports = typeDefs;