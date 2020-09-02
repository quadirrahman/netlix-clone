const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const commentsCltr = require('../app/controllers/commentsCltr')
const articlesCltr = require('../app/controllers/articlesCltr')
const usersCltr = require('../app/controllers/usersCltr')

router.get('/api/comments', commentsCltr.list)
router.get('/api/comments/:id', commentsCltr.show)
router.post('/api/comments', commentsCltr.create)
router.put('/api/comments/:id', commentsCltr.put)
router.delete('/api/comments/:id', commentsCltr.destroy)

router.get('/api/articles', articlesCltr.list)
router.get('/api/articles/:id', articlesCltr.show)
router.post('/api/articles', articlesCltr.create)
router.put('/api/articles/:id', articlesCltr.put)
router.delete('/api/articles/:id', articlesCltr.destroy)

router.post('/api/users/register', usersCltr.register)
router.post('/api/users/login', usersCltr.login)
router.get('/api/users/account', authenticateUser, usersCltr.account)

module.exports = router


