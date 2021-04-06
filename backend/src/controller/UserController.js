// const models = require('../models')
const User = require('../models/User');

// let User = models.User

module.exports = {
  async store(req, res) {
    try {
      const { name, avatar, profession, bio } = req.body;

      const user = await User.create({
        name, avatar, profession, bio
      })

      res.json(user)

    } catch (error) {
      res.status(400).json({ error: "Erro ao criar usuario!" + error })
    }
  },
  async index(req, res) {
    try {
      const users = await User.findAll();

      res.json(users)
    } catch (error) {
      res.status(400).json({ error: "Erro na listagem de usuarios " + error })
    }
  },
  async listOne(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findOne({ where: { id } })

      res.json(user)
    } catch (error) {
      res.status(400).json({ error: "Erro na busca do usuario " + error })
    }
  },
  async update(req, res) {
    try {
      const { name, avatar, profession, bio } = req.body
      const { id } = req.params

      const user = await User.update({
        name,
        avatar,
        profession,
        bio
      }, { where: { id } })

      res.json(user)
    } catch (error) {
      res.status(400).json({
        error: "Erro na atualização dos dados do usuario" + error
      })
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params

      await User.destroy({ where: { id } })

      res.json({ result: 'Usuario excluido!' })
    } catch (error) {
      res.status(400).json({ error: "Erro na exclusão do usuario" + error })
    }
  }
}