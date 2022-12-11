const { Schema, model } = require("mongoose");
const { defaultSchema, basicStringSchema } = require("../shared/utils/schema.utils");

const userSchema = new Schema(
  {
    names: basicStringSchema,
    surnames: basicStringSchema,
    dni: basicStringSchema,
    phone: basicStringSchema,
    email: basicStringSchema,
    state: defaultSchema(), // A:activo | I:inactivo
  },
  { versionKey: false }
);

module.exports = model("user", userSchema);