// will hold all routes for dinos
const express = require('express');
const router = express.Router();
const fs = require('fs');

// first get request for index option
router.get(`/`, function(req, res) {
    let dinos = fs.readFileSync(`./dinosaurs.json`)
    let dinoData = JSON.parse(dinos)
    res.json(dinos)
});




module.exports = router;
