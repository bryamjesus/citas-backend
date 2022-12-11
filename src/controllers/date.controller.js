const dateModel = require(`../models/date.model`)

const controller = {
  async getAllDate(req, res) {
    try {
      const results = await dateModel.find();
      res.json({ results });
    } catch (error) {
      console.log(error);
      res.status(500).send('Error en el listado');
    }
  },
}

module.exports = controller;