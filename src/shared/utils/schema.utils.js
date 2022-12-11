const { Schema } = require("mongoose");

const basicStringSchema = { type: String, require: true };
const basicDateSchema = { type: Date, require: true }
const basicNumberSchema = { type: Number, required: true };

const defaultSchema = (textDefult = "A") => ({ type: String, default: textDefult, });

const foreingKey = (tablePrimaryKey) => ({ type: Schema.ObjectId, ref: `${tablePrimaryKey}`, required: true })


module.exports = {
  basicStringSchema,
  basicDateSchema,
  basicNumberSchema,
  defaultSchema,
  foreingKey
};
