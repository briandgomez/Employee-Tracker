//Central Hub
const express = require('express');
const router = express.Router();

//Connects to questions
router.use(require('./questions.js'));