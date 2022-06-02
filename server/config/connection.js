const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://https://budget-tracker-final-project.herokuapp.com/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;