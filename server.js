const express = require('express');
const mongoose = require('mongoose');
const organizerRoutes = require('./routes/organizers');
const eventRoutes = require('./routes/events');
const attendeeRoutes = require('./routes/attendees');
const registrationRoutes = require('./routes/registrations');

const app = express();
const PORT = 3000;
app.use('/organizers', organizerRoutes);
app.use('/events', eventRoutes);
app.use('/attendees', attendeeRoutes);
app.use('/registrations', registrationRoutes);
// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/event_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

// Middleware
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
