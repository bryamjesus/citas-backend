const { Schema, model } = require("mongoose");
const { foreingKey, basicDateSchema, basicStringSchema } = require("../shared/utils/schema.utils");

const dateSchema = new Schema(
  {
    user_id: foreingKey('user'),
    appointmentTime: basicDateSchema,
    dayOfTheAppointment: basicStringSchema
  },
  {
    versionKey: false,
  }
);

module.exports = model("date", dateSchema);