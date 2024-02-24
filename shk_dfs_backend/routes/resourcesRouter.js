const Router = require('express')
const router = new Router()
const resourcesController = require('../controllers/resourcesController')

router.get('/getAll/:id', resourcesController.getAll)

module.exports = router