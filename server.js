// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const userController = require('./controller/userController');

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

connectDB();

// API routes with the specified base URL
const baseURL = process.env.API_URL;

// app.post(`${baseURL}/api/users`, userController.createUser);
// app.get(`${baseURL}/api/users`, userController.getUsers);


app.post(`${baseURL}/api/users`, userController.createUser);
app.get(`${baseURL}/api/users`, userController.getUsers);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
