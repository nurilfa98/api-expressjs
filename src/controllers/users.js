const UserModel = require('../models/users')

const create = async (req, res) => {
    const { body } = req

    if (!body.name || !body.email) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah'
        })
    }
    try {
        await UserModel.create(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

const findAll = async (req, res) => {
    try {
        const [data] = await UserModel.findAll()
        res.json({
            message: 'GET user success',
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

const findOne = async (req, res) => {
    const { params } = req
    try {
        const [data] = await UserModel.findOne(params.id)
        res.json({
            message: 'GET users by id success',
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

const update = async (req, res) => {
    const { params, body } = req
    try {
        await UserModel.update(params.id, body)
        res.json({
            message: 'UPDATE user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }

}

const remove = async (req, res) => {
    const { params } = req
    try {
        const [data] = await UserModel.findOne(params.id)
        await UserModel.remove(params.id)
        res.json({
            message: 'DELETE user success',
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
}