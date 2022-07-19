const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const routes = require('./routes');
const db = require('./config/db');

// connect to db
db.connect();

// Statics file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/ `);
});
