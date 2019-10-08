// will hold all routes for dinos
const express = require('express');
const router = express.Router();
const fs = require('fs');

// first get request for index option
router.get(`/`, function(req, res) {
    let dinos = fs.readFileSync(`./dinosaurs.json`)
    let dinoData = JSON.parse(dinos)
    res.render(`dinosaurs/index`, {dinos: dinoData})
});

router.get(`/new`, function(req, res) {
    res.render(`dinosaurs/new`)
})

router.get(`/:id`, function(req, res) {
    let index = parseInt(req.params.id);
    let dinos = fs.readFileSync(`./dinosaurs.json`);
    let dinoData = JSON.parse(dinos);
    res.render(`dinosaurs/show`, {dino: dinoData[index]})
});



module.exports = router;
