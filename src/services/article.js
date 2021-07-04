const { ArticleModel } = require('../models')

class ArticleService {
  static skipOffset = 0 // ++ или -- сдвиг при создании или удалении нового итема соответственно

  async getArticles(page, limit, search, tag) {
    const query = {
      title: new RegExp(search, 'i'),
      tags: new RegExp(tag, 'i')
    }
    const skip = ((+page - 1) * +limit) + ArticleService.skipOffset

    const total = await ArticleModel.countDocuments(query)
    const isLastPage = skip + limit >= total;

    const articles = await ArticleModel
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    ArticleService.skipOffset = 0

    return {
      articles,
      isLastPage,
      total,
    }
  }

  async createArticle(data) {
    const article = new ArticleModel(data)
    await article.save()

    ArticleService.skipOffset += 1;	// сдвиг увеличился

    return article
  }
}

module.exports = new ArticleService()
