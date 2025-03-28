// server.js (Backendni ishga tushiruvchi fayl)
const express = require('express');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');

// Express ilovasini yaratish
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB bilan ulanish
mongoose.connect('mongodb://localhost:27017/mafia_game', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDBga ulandi"))
  .catch((err) => console.log("MongoDBga ulanishda xatolik", err));

// Middleware
app.use(cors());
app.use(express.json());

// Socket.io bilan ishlash
io.on('connection', (socket) => {
  console.log('Yangi foydalanuvchi ulandi:', socket.id);

  // Chat uchun xabarlarni yuborish
  socket.on('send_message', (message) => {
    io.emit('receive_message', message);
  });

  socket.on('disconnect', () => {
    console.log('Foydalanuvchi ajraldi:', socket.id);
  });
});

// API endpoint yaratish
app.get('/api/players', (req, res) => {
  // MongoDB yoki boshqa ma'lumotlar manbaidan o'yinchilarni olish
  res.json([{ name: 'Player1' }, { name: 'Player2' }, { name: 'Player3' }]);
});

// Backendni ishga tushurish
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlamoqda...`);
});
const playerRoutes = require('./routes/playerRoutes');

// API yo'llarini ulash
app.use('/api/players', playerRoutes);
