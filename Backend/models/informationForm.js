const mongoose = require('mongoose');

const formInformationSchema = new mongoose.Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  address: { type: String, required: true },
});

const FormInformation = mongoose.model('FormInformation', formInformationSchema);

module.exports = FormInformation;