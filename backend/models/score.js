const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    registration_Number: { type: String, required: true, unique: true },
    math: { type: Number },
    literature: { type: Number },
    english: { type: Number },
    physics: { type: Number },
    chemistry: { type: Number },
    biology: { type: Number },
    history: { type: Number },
    geography: { type: Number },
    civic_education: { type: Number },
    language_code: { type: String },
});

const Score = mongoose.model('scores', ScoreSchema, 'scores');

module.exports = Score;
