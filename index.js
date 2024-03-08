// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());


const corsOptions = {
    origin: '*',
    origin: 'https://delicate-jelly-f7f578.netlify.app/',
    optionsSuccessStatus: 200,
  };
  app.use(cors());
//   app.use(cors(corsOptions));

// Connect to MongoDB 
connectDB();

// Define the User schema
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String
});

// Create a User model using the schema
const User = mongoose.model('User', userSchema);

// API to post user data to the database
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const PORT = process.env.PORT ||  8000;
  app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
