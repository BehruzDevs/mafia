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

// O'yinchi yangilash
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedPlayer) {
      return res.status(404).json({ message: "O'yinchi topilmadi" });
    }
    res.json(updatedPlayer);
  } catch (error) {
    res.status(400).json({ message: "O'yinchi yangilanishida xatolik", error });
  }
});

// O'yinchi o'chirish
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPlayer = await Player.findByIdAndDelete(id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: "O'yinchi topilmadi" });
    }
    res.json({ message: "O'yinchi muvaffaqiyatli o'chirildi" });
  } catch (error) {
    res.status(400).json({ message: "O'yinchi o'chirishda xatolik", error });
  }
});

module.exports = router;
