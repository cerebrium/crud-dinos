// will hold all routes for the cryptids
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get(`/`, function (req, res) {
    let cryptidsJson = fs.readFileSync(`./cryptids.json`)
    let cryptidsData = JSON.parse(cryptidsJson)
    res.render('cryptids/index', {cryptid: cryptidsData})
});

router.post(`/`, function(req, res) {
    let cryptidsJson = fs.readFileSync(`./cryptids.json`)
    let cryptidsData = JSON.parse(cryptidsJson);
    cryptidsData.push(req.body)
    fs.writeFileSync(`./cryptids.json`, JSON.stringify(cryptidsData))
    res.redirect(`cryptids/`)
})

router.get(`/new`, function(req, res) {
    res.render(`cryptids/new`)
})

router.get(`/:id`, function(req, res) {
    let cryptidID = parseInt(req.params.id);
    let cryptidsJson = fs.readFileSync(`./cryptids.json`);
    let cryptidsData = JSON.parse(cryptidsJson);
    res.render(`cryptids/show`, {crypt: cryptidsData[cryptidID]})
})


module.exports = router;