const { Router } = require('express')

const ArticleController = require('../controllers/article')

const router = new Router()

const articleController = new ArticleController()

router.get('/', articleController.getAll)
router.post('/create', articleController.create)

module.exports = router
