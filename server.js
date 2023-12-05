const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const path = require('path');
const handlebars = require('express-handlebars');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: false}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});