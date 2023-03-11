const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(() => {
      res.render('home')
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/log', (req, res) => {
  res.render('log')
})

router.get('/dream/:id', (req, res) => {
  res.send('woooo')
})

router.get('/add', (req, res) => {
  res.send('ok ok')
})

module.exports = router
