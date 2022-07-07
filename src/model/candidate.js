const mongoose = require("mongoose");
const Joi = require("joi");
Joi.ObjectId = require('joi-objectid')(Joi)



const CandidateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  telephone: {
    type: String,
    required: true,
  },

  nationalId: {
    type: String,
    required: true,
  },

  partyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party",
    required: true
  }

});

exports.validateData = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    age: Joi.number().min(2).required(),
    telephone: Joi.string().min(5).required(),
    nationalId: Joi.string().min(5).required(),
    partyId: Joi.ObjectId()
  });
  return schema.validate(data);
};


const Candidate = mongoose.model("Candidate", CandidateSchema);
module.exports.Candidate = Candidate;

