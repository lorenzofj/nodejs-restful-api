const express = require('express');
const router = express.Router();
const Mob = require('../models/Mob');

//Get back all the Mobs
router.get('/', async (req, res) => {
    try{
        const mobs = await Mob.find();
        res.json(mobs);
    }
    catch(error){
        res.json({message: error});
    }
});

//Get specific mob by name
router.get('/name=:mobName', async (req, res) => {
    try{
        const mob = await Mob.find({name: req.params.mobName});
        res.json(mob);
    }
    catch(error){
        res.json({message: error});
    }
});

//Get a specific mob by spawn
router.get('/spawn=:spawn', async (req, res) => {
    try{
        const mob = await Mob.find({spawn: req.params.spawn});
        res.json(mob);
    }
    catch(error){
        res.json({message: error});
    }
});

//Get a specific mob by behavior
router.get('/behavior=:behavior', async (req, res) => {
    try{
        const mob = await Mob.find({behavior: req.params.behavior});
        res.json(mob);
    }
    catch(error){
        res.json({message: error});
    }
});

//Get a mob by usableItem
router.get('/usableItems=:usableItems', async (req, res) => {
    try{
        const mob = await Mob.find({usableItems: req.params.usableItems});
        res.json(mob);
    }
    catch(error){
        res.json({message: error});
    }
});

//Submit a mob
router.post('/', async (req, res) => {
    //Create a new Mob
    const mob = new Mob({
        name: req.body.name,
        healthPoints: req.body.healthPoints,
        behavior: req.body.behavior,
        spawn: req.body.spawn,
        usableItems: req.body.usableItems,
        appearance: req.body.appearance
    });

    //Save to DB. Promise
    try{
        const savedMob = await mob.save();
        res.json(savedMob);
    }
    catch(error){
        res.json({message: error});
    }
});

module.exports = router;