const express = require('express');
const authRoutes = require('./routes/auth');
const spotsRoutes = require('./routes/spots');
const countriesRoutes = require('./routes/countries');
const favoritesRoutes = require('./routes/favorites');
const authMiddleware = require('./middleware/auth');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
})

//public section
app.use('/api', authRoutes)

//private section
app.use(authMiddleware)
app.use('/api', spotsRoutes)
app.use('/api', favoritesRoutes)
app.use('/api', countriesRoutes)

app.use((error, req, res, next) => {
  const {
    statusCode,
    message,
    errorArray
  } = error

  res.status(statusCode).json({ message: message, errors: errorArray })
})


app.listen(8080)
