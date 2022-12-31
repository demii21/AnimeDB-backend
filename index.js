// const connectToMongo = require('/db');

const express = require('express');
var cors = require('cors');
var routes = require('./rotues/anime')

const app = express();
const port =5000;

app.use(cors());
app.use(express.json());
//Available ROutes
app.use('/api/anime',routes);


app.listen(port, () => {
    console.log(`Anime App listening @ ${port}`)
  })