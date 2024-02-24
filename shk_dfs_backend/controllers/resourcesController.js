const {Folder, Managers} = require('../models/models')

class resourcesController{

    async getAll(req, res) {
        const {id} = req.params
        const resources = await Folder.findAll({where: {spkId: id},
        include: [
            {
                model: Managers,
                attributes: ['id', 'first_manager', 'second_manager', 'order_date', 'order_num']
            }
    ],
        attributes: ['path']
    })
        return res.json(resources)
    }
}

module.exports = new resourcesController()