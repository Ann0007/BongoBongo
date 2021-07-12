const mongoose = require('mongoose')
const Student = require('./students.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/student"

const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
};

module.exports = {
  connectDb,
  models: {
    Student
  }
} 