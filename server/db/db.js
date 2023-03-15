const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDreams,
  getADream,
  addDream,
  getDreamEmotion,
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
function getDreamEmotion(db = connection) {
  return db('dreams').where('dreams.id', id).select('*')
}

// function getAllWombleRubbish(id, db = conn) {
//   return db('wombles')
//     .where('wombles.id', id)
//     .select(
//       '*',
//       'wombles.id AS id',
//       'wombles.name AS name',
//       'rubbish.name AS trash'
//     )
//     .join('rubbish', 'wombles.rubbish_id', 'rubbish.id')
