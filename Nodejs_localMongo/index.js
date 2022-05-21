const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config()

const app = express();
mongoose.connect(process.env.MO_URL,{useNewUrlParser: true});
// mongoose.Error.DisconnectedError
// MongoClient.connect(process.env.MO_URL).then((client) => {
//     const db = client.db()
// })
//access json resp
app.use(express.json());

//midware part
const alienRouters = require('./service/routers/aliens')
app.use('/bsp',alienRouters)

const port = process.env.PORT || 3000 
app.listen(port)