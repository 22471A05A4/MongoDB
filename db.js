const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI; 

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
