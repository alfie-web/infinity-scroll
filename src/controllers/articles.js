const createError = require('http-errors')

const validateRequest = require('../helpers/validateRequest')

const articlesService = require('../services/articles')

// TODO: Написать тесты на пагинацию и тд

class ArticleController {
  getAll = async (req, res, next) => {
    const { page = 1, limit = 3, search = '', tag = '' } = req.query

    try {
      const { articles, isLastPage, total } = await articlesService.getArticles(page, limit, search, tag)

      res.json({
        docs: articles,
        isLastPage,
        page: +page,
        pages: Math.ceil(total / +limit),
        total,
      })

		} catch (error) {
			next(createError(500, 'Самсинг вент ронг'))
		}
  }

  // Пагинация только с offset (подойдёт в случяях, где не нужен url)
  //   getAll = async (req, res, next) => {
  //   const { offset = 0, limit = 9 } = req.query

  //   try {
  //     const skip = +offset

  //     const total = await ArticleModel.countDocuments()
  //     console.log('skip', skip)

  //     const articles = await ArticleModel
  //       .find()
  //       .skip(skip)
  //       .limit(limit)
  //       .sort({ field: 'asc', createdAt: -1 })

  //     res.json({
  //       docs: articles,
  //       total,
  //       // pages: Math.ceil(total / limit)
  //     })

	// 	} catch (error) {
	// 		next(createError(400, 'Самсинг вент ронг'))
	// 	}
  // }

  create = async (req, res, next) => {
    validateRequest(req, next)

    try {
      const article = await articlesService.createArticle(req.body)

      res.json({
        data: article
      })

    } catch (error) {
      next(createError(400, 'Самсинг вент ронг'))
    }
  }
}

module.exports = ArticleController
