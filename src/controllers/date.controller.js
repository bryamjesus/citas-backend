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
  }
}

module.exports = controller;