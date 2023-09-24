//setting the mongo db path

const mongoose = require('mongoose');

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../', '.env') });

const dbUrl = process.env.MONGO_URL;

console.log(dbUrl);

//adding different conditions for mongo db

module.exports = () => {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log((`connected to mongoDB ${dbUrl}`));
  });

  // Enable Mongoose debugging
  mongoose.set("debug", true);

  mongoose.connection.on('error', (err) => {
    console.log((`MongoDB has occured ${err}`));
  });

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB is disconnected due to application termination');
      process.exit(0);
    });
  });
};
