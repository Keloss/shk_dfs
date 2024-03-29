const {Folder, SPK, Managers, Section} = require('../models/models')
const ApiError = require('../error/ApiError')

class pathController{
    async createPath(req, res, next) {
        const {path, spkId, managerId} = req.body
        if(!path || !spkId || !managerId){
            return next(ApiError.badRequest('Выберите значения'))
        }
        const namePath = await Folder.create({path, spkId, managerId})
        return res.json(namePath)
    }

    async createSPK(req, res) {
        const {full_name, name, sectionId, managerId} = req.body
        const spk = await SPK.create({full_name, name, sectionId, managerId})
        return res.json(spk)
    }

    async createFIO(req, res) {
        const {first_manager, second_manager, order_date, order_num} = req.body
        const managers = await Managers.create({first_manager, second_manager, order_date, order_num})
        return res.json(managers)
    }

    async createSection(req, res) {
        const {name} = req.body
        const spk = await Section.create({name})
        return res.json(spk)
    }


    async getPath(req, res) {
        const Path = await Folder.findAll()
        return res.json(Path)
    }


    async getSection(req, res) {
        const section = await Section.findAll()
        return res.json(section)
    }

    async getSpk(req, res) {
        const {id} = req.params
        const spk = await SPK.findAll({where: {sectionId: id}, attributes: ['id','name'] })
        return res.json(spk)
    }

    async getAllSpk(req, res) {
        const spk = await SPK.findAll()
        return res.json(spk)
    }

    async getManagers(req, res){
        const {id} = req.params
        const managers = await SPK.findAll({where: {id: id}, 
        include: [{
            model: Managers,
            attributes: ['id', 'first_manager', 'second_manager']
            }]
        })
        return res.json(managers)
    }

    async getAllManagers(req, res) {
        const managers = await Managers.findAll()
        return res.json(managers)
    }
}

module.exports = new pathController()