const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    renewable: {
        type: Array,
        required: true
    },
    durability: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Item', itemSchema);