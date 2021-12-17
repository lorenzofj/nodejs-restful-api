const mongoose = require('mongoose');

const biomeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    structures: {
        type: Array,
        required: true
    },
    blocks: {
        type: Array,
        required: true
    },
    appearance: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Biome", biomeSchema);