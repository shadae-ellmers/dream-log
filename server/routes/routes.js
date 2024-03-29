const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/dreams', (req, res) => {
  db.getDreams()
    .then((dream) => {
      const dataObj = {
        dream,
      }
      res.render('dreams', dataObj)
    })
    .catch((err) => {
      console.log('oops' + err.message)
    })
})

router.get('/dreams/:id', (req, res) => {
  let id = req.params.id
  db.getADream(id)
    .then((dream) => {
      res.render('detail', dream)
    })
    .catch((err) => {
      console.log('oops' + err.message)
    })
})

router.get('/add', (req, res) => {
  res.render('add')
})

router.post('/add', (req, res) => {
  const { title, date_day, date_month, date_year, themes, stories, feeling } =
    req.body
  const newDream = {
    title: title,
    date_day: date_day,
    date_month: date_month,
    date_year: date_year,
    themes: themes,
    stories: stories,
    feeling: feeling,
  }
  db.addDream(newDream)
    .then(() => {
      res.redirect('/dreams')
    })
    .catch((err) => {
      console.log('oops' + err.message)
    })
})

router.get('/about-me', (req, res) => {
  res.render('about-me')
})

module.exports = router
