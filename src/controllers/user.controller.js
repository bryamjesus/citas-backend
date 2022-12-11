const userModel = require(`../models/user.model`)

const controller = {
  async getAllUsers(res) {
    try {
      const results = await userModel.find();
      res.json({ results });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  async getOneUser(req, res) {
    try {
      const { id } = req.params;
      const result = await userModel.findById(id);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  async createOneUser(req, res) {
    const { names, surnames, dni, phone, email } = req.body;
    const user = new userModel();
    user.names = names;
    user.surnames = surnames;
    user.dni = dni;
    user.phone = phone;
    user.email = email;
    try {
      const result = await user.save();
      res.json(result);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

}

module.exports = controller