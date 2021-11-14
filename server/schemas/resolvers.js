const { AuthenticationError } = require("apollo-server-express");
const { User, Teacher, ClassRoom, Profile, Activity } = require("../models");
const { signToken } = require("../utils/auth");

async function loginFunction(Schema, email, password) {
  const user = await Schema.findOne({ email });
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
    getTeacherProfile: async (parent, args, context) => {
      const foundTeacher = await Teacher.findById(context.user._id)
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
    createTeacher: async (parent, { username, email, password, first_name, last_name, is_main }) => {
      const user = await Teacher.create({ username, email, password, first_name, last_name, is_main });
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
    }
  },

};

module.exports = resolvers;
