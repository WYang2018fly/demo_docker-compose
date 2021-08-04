const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TestSchema = new Schema({
  key: { type: String },
  value: { type: String }
});

module.exports = model('Test', TestSchema, 'tests');
