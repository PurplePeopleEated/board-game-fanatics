const express = require('express');
const session = require('express-session');
// const routes = require('./controllers');
const userRoutes = require("./controllers/api/user-routes.js");
const homeRoutes = require("./controllers/home-routes.js");
const path = require('path');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    secure: false,
    httpOnly: true,
 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);
app.use(userRoutes);
app.use(homeRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));})
  .catch((err) => console.error('Database synchronization error:', err));