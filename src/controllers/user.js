const User = require("../models/User")

const createUser = async (req, res) => {
    const { body } = req
    await User.create(body)
    res.json(body)
}

const getAllUsers = async (req, res) => {
    const data = await User.findAll()
    res.json(data)
}

const getUser = async (req, res) => {
    const { id } = req.params
    const data = await User.findByPk(id)
    res.json(data)
}

const updateUser = async (req, res) => {
    const { body, params: { id } } = req
    const user = await User.update({
        ...body
    }, {
        where: {
            id: id
        }
    })
    res.json(user)
}

const deleteUser = async (req, res) => {
    const { params: { id } } = req
    const user = await User.destroy({ where: { id: id } })
    res.json(user)
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}