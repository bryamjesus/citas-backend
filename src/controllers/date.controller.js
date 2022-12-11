const dateModel = require(`../models/date.model`)

const controller = {
  async getAllDate(res) {
    try {
      const results = await dateModel.find({}).populate('user_id')
      res.json({ results });
    } catch (error) {
      console.log(error);
      res.status(500).send('Error en el listado');
    }
  },
  async getOneDate(req, res) {
    try {
      const { id } = req.params;
      const result = await dateModel.findById(id).populate('user_id')
      res.json(result);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  async createOneDate(req, res) {
    try {
      const { user_id, appointmentTime, dayOfTheAppointment } = req.body;
      const date = new dateModel();
      date.user_id = user_id;
      date.appointmentTime = appointmentTime;
      date.dayOfTheAppointment = dayOfTheAppointment;
      const result = await date.save();
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al guardar la cita');
    }
  },
  async updateOneUser(req, res) {
    const { id } = req.params;
    const { user_id, appointmentTime, dayOfTheAppointment } = req.body;
    const update = {
      user_id,
      appointmentTime,
      dayOfTheAppointment
    }

    try {
      const result = await dateModel.findByIdAndUpdate(id, update, {
        new: true,
      });
      res.json(result);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  async deleteOneUser(req, res) {
    try {
      const { id } = req.params;
      await dateModel.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

}

module.exports = controller;