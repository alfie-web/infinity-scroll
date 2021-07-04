const createError = require('http-errors')

// const { ArticleModel } = require('../models')
const articleService = require('../services/article')

// TODO: Написать тесты на пагинацию и тд

class ArticleController {
  // static skipOffset = 0 // ++ или -- сдвиг при создании или удалении нового итема соответственно

  getAll = async (req, res, next) => {
    const { page = 1, limit = 3, search = '', tag = '' } = req.query

    try {
      // const query = {
      //   title: new RegExp(search, 'i'),
      //   tags: new RegExp(tag, 'i')
      // }
      // const skip = ((+page - 1) * +limit) + ArticleController.skipOffset

      // const total = await ArticleModel.countDocuments(query)
			// const isLastPage = skip + limit >= total;

      // const articles = await ArticleModel
      //   .find(query)
      //   .sort({ createdAt: -1 })
      //   .skip(skip)
      //   .limit(limit)

      // ArticleController.skipOffset = 0
      const { articles, isLastPage, total } = await articleService.getArticles(page, limit, search, tag);

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
    try {
      // const article = new ArticleModel(req.body)
      // await article.save()

      // ArticleController.skipOffset += 1;	// сдвиг увеличился
      const article = await articleService.createArticle(req.body)

      res.json({
        data: article
      })

    } catch (error) {
      next(createError(400, 'Самсинг вент ронг'))
    }
  }
}

module.exports = ArticleController
