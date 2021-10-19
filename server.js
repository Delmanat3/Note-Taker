const express = require('express')
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");

const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));