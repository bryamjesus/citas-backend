const userModel = require(`../models/user.model`);
const { DNI_EXIST } = require("../shared/utils/response.utils");

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
    try {
      const { names, surnames, dni, phone, email } = req.body;
      const allUsers = await userModel.find();
      const existUser = allUsers.findIndex((user) => user.dni === dni)
      if (existUser === -1) {
        console.log(existUser)
        const user = new userModel();
        user.names = names;
        user.surnames = surnames;
        user.dni = dni;
        user.phone = phone;
        user.email = email;
        const result = await user.save();
        res.json(result);
      } else {
        res.json(DNI_EXIST)
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  async deleteOneUser(req, res) {
    try {
      const { id } = req.params;
      await userModel.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
}

module.exports = controller