const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
const port = 3000
const cookieParser=require('cookie-parser')
const authRoutes = require('./routes/authRoutes');
const taskRoutes=require('./routes/taskRoutes');
const connectDB = require('./config/db');
const User = require('./models/User')
const {requireAuth,checkUser}=require('./middleware/authMiddleware')


// Connect to MongoDB
connectDB();
app.use(cookieParser())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
  res.send('CRUD Task System')
})
app.use(express.json());
app.use(checkUser)
app.use('/api/auth',authRoutes)
app.use('/api', requireAuth, taskRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
