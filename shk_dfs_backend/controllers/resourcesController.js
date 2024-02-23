const {Folder} = require('../models/models')

class resourcesController{

    async getAll(req, res) {
        const resources = await Folder.findAll()
        return res.json(resources)
    }
}

module.exports = new resourcesController()