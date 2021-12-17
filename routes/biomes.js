const express = require('express');
const router = express.Router();
const Biome = require('../models/Biome');

router.get('/', async (req, res) => {
    try{
        const biomes = await Biome.find();
        res.json(biomes);
    }
    catch(error){
        res.json({message: error});
    }
});

router.get('/name=:biomeName', async (req, res) => {
    try{
        const biome = await Biome.find({name: req.params.biomeName});
        res.json(biome);
    }
    catch(error){
        res.json({message: error});
    }
});

router.get('/rarity=:biomeRarity', async (req, res) => {
    try{
        const biome = await Biome.find({biomeRarity: req.params.biomeRarity});
        res.json(biome);
    }
    catch(error){
        res.json({message: error});
    }
});

router.get('/temperature=:biomeTemperature', async (req, res) => {
    try{
        const biome = await Biome.find({temperature: req.params.biomeTemperature});
        res.json(biome);
    }
    catch(error){
        res.json({message: error});
    }
});

router.get('/structures=:biomeStructures', async (req, res) => {
    try{
        const biome = await Biome.find({structures: req.params.biomeStructures});
        res.json(biome);
    }
    catch(error){
        res.json({message: error});
    }
});

router.get('/blocks=:biomeBlocks', async (req, res) => {
    try{
        const biome = await Biome.find({blocks: req.params.biomeBlocks});
        res.json(biome);
    }
    catch(error){
        res.json({message: error});
    }
});

router.get('/appearance=:biomeAppearance', async (req, res) => {
    try{
        const biome = await Biome.find({appearance: req.params.biomeAppearance});
        res.json(biome);
    }
    catch(error){
        res.json({message: error});
    }
});

//Submit a biome
router.post('/', async (req, res) => {
    const biome = new Biome({
        name: req.body.name,
        rarity: req.body.rarity,
        temperature: req.body.temperature,
        structures: req.body.structures,
        blocks: req.body.blocks,
        appearance: req.body.appearance
    });

    try{
        const savedBiome = await biome.save();
        res.json(savedBiome);
    }
    catch(error){
        res.json({message: error});
    }
});

module.exports = router;