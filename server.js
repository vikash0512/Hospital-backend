const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const authRoutes = require('./routes/authRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');

const app = express();

// Body parser
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://your-netlify-app.netlify.app' // Replace with your Netlify domain
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Mount routers
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/hospitals', hospitalRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Hospital Management API' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
}); 