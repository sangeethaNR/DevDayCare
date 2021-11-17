const { AuthenticationError } = require("apollo-server-express");
const { Photo,User,Food, Teacher, ClassRoom, Profile, Activity, Notes, IncidentReport } = require("../models");
const { signToken } = require("../utils/auth");

async function loginFunction(Schema, email, password) {
  console.log('inside login function:' +Schema+ email+ password)
  const user = await Schema.findOne({ email });
  console.log("user:" + user)
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
    getAllTeachersForAdmin: async (parent, args, context) => {
      const teachers = await Teacher.find({})
      return teachers
    },
    getTeacherProfile: async (parent, {id}, context) => {
      const foundTeacher = await Teacher.findById(id)
      if (!foundTeacher) {
        throw new AuthenticationError("Cannot find a user with this id!");
      }
      return foundTeacher;
    },
    getStudentProfile: async (parent, {id}, context) => {
      const teacher = await Profile.findById(id)
      if (!teacher) {
        throw new AuthenticationError("Cannot find a user with this id!");
      }
      return teacher;
    },
    getStudentMedicalInfo: async (_, {id}) => {
      const studentInfo = Profile.findById(id)
      console.log(studentInfo)
      if (!studentInfo) {
        throw new AuthenticationError("Cannot find a student with this id!");
      }
      return studentInfo;

    },
    getClassRoom:async(parent,{ teacherId },context) =>{
      const classRoom = ClassRoom.find({teachers: teacherId}).populate('students').populate("teachers")
      console.log(classRoom)
      if (!classRoom) {
        throw new AuthenticationError("No classroom associated with the teacher!");
      }
      return classRoom;
    },
    getPhotos:async(parent,{ student_id },context) =>{
      console.log('inside getPhotos:0' + student_id)
      const photo = Photo.find({student_id: student_id})
      
      console.log(photo)
      if (!photo) {
        throw new AuthenticationError("No photo associated with the student!");
      }
      return photo;
    },
    getActivities:async(parent,{ student_id },context) =>{
     
      const activity = Activity.find({student_id: student_id})
      
      console.log(activity)
      if (!activity) {
        throw new AuthenticationError("No Activity associated with the student!");
      }
      return activity;
    },
    getFood:async(parent,{ student_id },context) =>{
     
      const food = Food.find({student_id: student_id})
      
      console.log(food)
      if (!food) {
        throw new AuthenticationError("No food associated with the student!");
      }
      return food;
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      return await loginFunction(User, email, password);
    },
    createUser:  async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password, is_admin, is_admin: true });
      const token = signToken(user);
      return { token, user };
    },
    changeTeacherStatus: async (parent, { id, status } ) => {
      const user = await Teacher.findOne({_id: id})
      user.is_active = status
      await user.save()

      return {user}
    },
    createTeacher: async (parent, { username, email, first_name, last_name, is_main, password }) => {
      const user = await Teacher.create({ username, email, first_name, last_name, is_main, password });
      const token = signToken(user);
      return { token, user };
    },
    loginTeacher: async (parent, { email, password }) => {
      return await loginFunction(Teacher, email, password);
    },
    createClass: async (parent, {teacher_id, className}) => {
      const body = {
        className,
        teachers: [teacher_id]
      }
      const classRoom = await ClassRoom.create(body)
      const teacher = await Teacher.findOne({_id: teacher_id})
      console.log(teacher)
      teacher.classRooms.push(classRoom._id)

      await teacher.save()

      return classRoom
    },
    addClassActivities: async (parent, {activityInput : {desc, day, activityType, classRoom_id}}) => {
      const activity = await Activity.create({desc, activityType, day})
      const foundClassRoom = await ClassRoom.findById(classRoom_id)
      foundClassRoom.activities.push(activity._id)

      await foundClassRoom.save()
      return activity
    },
    addStudent: async (_, {studentInput, class_id }) => {
      const student = await Profile.create(studentInput)
      const classRoom = await ClassRoom.findById(class_id)
      classRoom.students.push(student._id)

      await classRoom.save()
      return student
    },
    addStudentNotes: async (_, {notesInput}) => {
      const notes = await Notes.create(notesInput)

      return notes
    },
    addStudentIncidentReports: async (_, {incidentReportInput}) => {
      const incidentReport = await IncidentReport.create(incidentReportInput)
      return incidentReport
    },
    addStudentMedication: async (_, {student_id, medication}) => {
      const student = await Profile.findById(student_id)
      student.medications.push(medication)

      await student.save()
      return student
    },
    addTeacher:async (parent, {username, email, first_name, last_name, is_main,is_active}) => {

      const teacher = await Teacher.create({username, email, first_name, last_name, is_main,is_active});
return teacher
    },
    addFood:async (parent, {student_id,mealSession,mealDesc}) => {

      const food = await Food.create( {student_id,mealSession,mealDesc});
return food
    },
    addActivity:async (parent, {activityType,desc,student_id}) => {

      const activity = await Activity.create( {activityType,desc,student_id});
return activity
    },
    addPhoto:async (parent, {student_id,imageUrl,desc}) => {

      const photo = await Photo.create( {student_id,imageUrl,desc});
return photo
    }
  },

};

module.exports = resolvers;
