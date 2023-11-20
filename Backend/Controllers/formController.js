const FormInformation = require('../models/informationForm');

const createForm = async (req, res) => {
  try {
    const { lastName, firstName, emailAddress, address } = req.body;

    console.log('Received Form Data:', lastName, firstName, emailAddress, address);
    
    const newForm = new FormInformation({
      lastName,
      firstName,
      emailAddress,
      address,
    });

    await newForm.save();

    res.status(201).json({ message: 'Form created successfully' });
  } catch (error) {
    console.error('Error creating form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllForm = async (req, res) => {
  try {
    const forms = await FormInformation.find().populate('addedProductId');

    res.status(200).json(forms);
  } catch (error) {
    console.error('Error getting forms:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createForm, getAllForm };