require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());

//rendering form.ejs
app.get("/", function(req, res){
    res.render("index");
});
app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})