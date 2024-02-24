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
router.get('/getAllSpk', pathController.getAllSpk)
router.get('/getAllManagers', pathController.getAllManagers)
router.get('/getManagers/:id', pathController.getManagers)

module.exports = router