const Router = require('express')
const router = new Router()
const resourcesController = require('../controllers/resourcesController')

router.get('/getAll', resourcesController.getAll)

module.exports = router