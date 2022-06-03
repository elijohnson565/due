const mongoose = require('mongoose');

//fixing mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Bill-Tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;