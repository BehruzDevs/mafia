const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// O'yinchi qo'shish
router.post('/add', async (req, res) => {
  const { name } = req.body;
  const newPlayer = new Player({ name });
  
  try {
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(400).json({ message: "O'yinchi qo'shishda xatolik", error });
  }
});

// O'yinchilarni olish
router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(400).json({ message: "O'yinchilarni olishda xatolik", error });
  }
});

module.exports = router;
