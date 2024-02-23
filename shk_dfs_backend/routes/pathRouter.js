const Router = require('express')
const router = new Router()
const pathController = require('../controllers/pathController')

router.post('/createPath', pathController.createPath)
router.post('/createSPK', pathController.createSPK)
router.post('/createFIO', pathController.createFIO)
router.post('/createSection', pathController.createSection)
router.get('/getPath', pathController.getPath)
router.get('/getSection', pathController.getSection)
router.get('/getSpk/:id', pathController.getSpk)

module.exports = router