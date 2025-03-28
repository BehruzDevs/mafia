const express = require('express');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');

// Import the playerRoutes file
const playerRoutes = require('./routes/playerRoutes');

// Express application setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mafia_game', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDBga ulandi"))
  .catch((err) => console.log("MongoDBga ulanishda xatolik", err));

// Middleware setup
app.use(cors());
app.use(express.json());

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Yangi foydalanuvchi ulandi:', socket.id);

  // Chat messages handling
  socket.on('send_message', (message) => {
    io.emit('receive_message', message);
  });

  socket.on('disconnect', () => {
    console.log('Foydalanuvchi ajraldi:', socket.id);
  });
});

// Use the playerRoutes for /api/players
app.use('/api/players', playerRoutes);

// Start the backend server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlamoqda...`);
});
