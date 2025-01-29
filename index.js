const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const contactRoutes = require("./routes/contactRoutes")
const jobRoutes = require('./routes/jobRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/contacts', contactRoutes);
app.use('/jobs', jobRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


  app.get('/', (req, res) => {
    res.send('Hello World!')
  })


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`my server is ${PORT}`));


