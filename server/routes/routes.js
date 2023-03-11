const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/log', (req, res) => {
  db.getDreams()
    .then((dream) => {
      const dataObj = {
        dream,
      }
      res.render('log', dataObj)
    })
    .catch((err) => {
      console.log('oops' + err.message)
    })
})

router.get('/dream/:id', (req, res) => {
  res.send('woooo')
})

router.get('/add', (req, res) => {
  res.send('ok ok')
})

module.exports = router
