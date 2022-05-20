const express = require('express');
const router = express.Router()
const Alien = require('../models/aliens')

router.get('/',async (req, res) => {
    try{
        const aliens = await Alien.find();
        res.json(aliens)
    }catch(err){
        res.send('Error '+err)
    }
});

router.get('/:id',async (req, res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    }catch(err){
        res.send('Error '+err);
    }
});

router.post('/',async(req, res)=>{
    const alien = new Alien({
        Name: req.body.Name,
        Tech: req.body.Tech,
        Sub: req.body.Sub,
    });

    try{
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.status(404);
        res.write('Error '+err)
    };
});

router.patch('/:id', async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.Sub = req.body.Sub;
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send('Error '+err);
    }

});

router.delete('/:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        alien.delete();
        res.send(`${req.params.id} deleted`);
    }catch(err){
        res.send('Error '+err);
    }
})

module.exports = router;