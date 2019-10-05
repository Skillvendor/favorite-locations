const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*')
  next();
})

app.use('/api', authRoutes)

app.use((error, req, res, next) => {
  console.log(error)
  const {
    statusCode,
    message,
    errorArray
  } = error

  res.status(statusCode).json({ message: message, errors: errorArray })
})


app.listen(8080)
