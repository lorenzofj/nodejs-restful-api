const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }
    catch(error){
        res.json({message: error});
    }
});

router.get('/name=:itemName', async (req, res) => {
    try{
        const item = await Item.find({name: req.params.itemName});
        res.json(item);
    }
    catch(error){
        res.json({message: error});
    }
});

//Get a specific item by rarity
router.get('/rarity=:itemRarity', async (req, res) => {
    try{
        const item = await Item.find({rarity: req.params.itemRarity});
        res.json(item);
    }
    catch(error){
        res.json({message: error});
    }
});

//Get a specific item by renewable
router.get('/renewable=:itemRenewable', async (req, res) => {
    try{
        const item = await Item.find({rarity: req.params.itemRenewable});
        res.json(item);
    }
    catch(error){
        res.json({message: error});
    }
});

//Get a specific item by durability
router.get('/durability=:itemDurability', async (req, res) => {
    try{
        const item = await Item.find({rarity: req.params.itemDurability});
        res.json(item);
    }
    catch(error){
        res.json({message: error});
    }
});

//Submit an item
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        rarity: req.body.rarity,
        renewable: req.body.renewable,
        durability: req.body.durability
    });

    try{
        const savedItem = await item.save();
        res.json(savedItem);
    }
    catch(error){
        res.json({message: error});
    }
});

module.exports = router;