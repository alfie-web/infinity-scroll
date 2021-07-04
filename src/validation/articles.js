const { body } = require('express-validator/src');

module.exports = {
  createArticle: [
    body('title')
      .exists().bail()  //.bail() - остановит цепочку проверок, если найдёт ошибку (это избавляет от однотипных сообщений)
      .isString().bail(),
  ],
};
