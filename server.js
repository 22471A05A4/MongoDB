require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const authenticate = require('./middleware/authMiddleware');
const router = require('./routes/authRoutes'); 
const connectDB = require('./db'); 


const app = express();
const PORT = process.env.PORT || 3000;
app.use('/auth', router); 
app.use(express.json());
connectDB();
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// 404 and Error Handling
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});