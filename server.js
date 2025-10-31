const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bankRoutes = require('./routes/bankRoutes');
const logger = require('./utils/logger');

const app = express();
app.use(bodyParser.json());

// Apply global logger middleware
app.use(logger);

// Routes
app.use('/', authRoutes);
app.use('/', bankRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
