const { createArticle } = require('../validation/articles');

module.exports = (Router, Cotroller) => {
	const routes = new Router()
	const cotroller = new Cotroller()

	routes.get('/', cotroller.getAll)
	// routes.get('/:id', cotroller.getById)
	routes.post('/create', createArticle, cotroller.create)

	return routes
}
