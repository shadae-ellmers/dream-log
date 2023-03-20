const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDreams,
  getADream,
  addDream,
}

function getDreams(db = connection) {
  return db('dreams').select()
}

function getADream(id, db = connection) {
  return db('dreams').select().where('id', id).first()
}

function addDream(newDream, db = connection) {
  return db('dreams').insert(newDream)
}
