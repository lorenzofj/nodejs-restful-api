const mongoose = require('mongoose');

const mobSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    healthPoints: {
        type: Number,
        required: true
    },
    behavior: {
        type: String,
        required: true
    },
    spawn: {
        type: Array,
        required: true
    },
    usableItems: {
        type: Array,
        default: ["None"]
    },
    appearance: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mob', mobSchema);