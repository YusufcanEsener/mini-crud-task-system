const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
const port = 3000
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
const User = require('./models/User')


// Connect to MongoDB
connectDB();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
  res.send('CRUD Task System')
})
app.use(express.json());
app.use('/api/auth',authRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
