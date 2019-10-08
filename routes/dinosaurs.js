// will hold all routes for dinos
const express = require('express');
const router = express.Router();
const fs = require('fs');

// first get request for index option
router.get(`/`, function(req, res) {
    let dinos = fs.readFileSync(`./dinsaurs.json`)
    console.log(dinos)
});




module.exports = router;
