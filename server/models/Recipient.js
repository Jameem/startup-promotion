const mongoose = require("mongoose")
const { Schema } = mongoose

const recipientSchema = new Schema({
  email: String,
  body: String,
  responded: { type: Boolean, default: false },
})

module.exports = recipientSchema
