const teacher = require('./teacher')
const admin = require("admin")

module.exports = {
    ...teacher,
    ...admin
}