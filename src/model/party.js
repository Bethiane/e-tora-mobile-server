const mongoose = require("mongoose");
const Joi = require("joi");


const PartySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  slogan: {
    type: String,
    required: true,
  },

  doc: {
    type: String,
    required: true,
  }

});

exports.validateData = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    slogan: Joi.string().min(10).required(),
    doc: Joi.string().min(5).required(),
  });
  return schema.validate(data);
};

const Party = mongoose.model("Party", PartySchema);
module.exports.Party = Party;

