const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const app = express();
mongoose.connect(process.env.MO_URL,{useNewUrlParser: true});

//access json resp
app.use(express.json());

//midware part
const alienRouters = require('./service/routers/aliens')
app.use('/aliens',alienRouters)

const port = process.env.PORT || 3000 
app.listen(port)