const Router = require('express')
const router = new Router()
const pathRouter = require('./pathRouter')
const resourcesRouter = require('./resourcesRouter')

router.use('/path', pathRouter)
router.use('/list', resourcesRouter)

module.exports = router