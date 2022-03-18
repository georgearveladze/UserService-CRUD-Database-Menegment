const User = require('../models/User')

async function getUserByUsername(username) {
  const user = User.findOne({ username: username })
  return user
}
async function getUserById(id) {
  const user = User.findOne({ id: id })
  return user
}

async function getActiveUser(trueOrFalse) {
  const user = User.find({ deleted: trueOrFalse })
  return user
}

async function saveUser(data) {
  const user = new User(data).save()
  return user
}

async function findUserAndUpdate(id, data) {
  const user = User.findOneAndUpdate({ id: id }, data, { new: true })
  return user
}
module.exports = {
  getUserByUsername,
  getUserById,
  getActiveUser,
  saveUser,
  findUserAndUpdate,
}
