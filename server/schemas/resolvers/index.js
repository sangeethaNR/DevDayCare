// Not Used because could not figure out how to refactor resolvers to corresponding items


const teacher = require('./teacher')
const admin = require("admin")

module.exports = {
    ...teacher,
    ...admin
}