const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['civilian', 'mafia', 'doctor', 'commissioner', 'detective'], 
    default: 'civilian' 
  },
  status: { 
    type: String, 
    enum: ['alive', 'dead'], 
    default: 'alive' 
  },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' }
});

module.exports = mongoose.model('Player', playerSchema);
