const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ugmc', {useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

app.use('/api', patientRoutes);

app.listen (port, () => {
    console.log('Server running at http://localhost:$(port')
});