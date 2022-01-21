require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
    console.log("App listening on port: ", port);
});