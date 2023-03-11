const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
}

function getUsers(db = connection) {
  return db('dreams').select()
}

function getUser(id, db = connection) {
  return db('dreams').where('id', id).first()
}
