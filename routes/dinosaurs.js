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

router.post(`/`, function(req, res) {
    let dinos = fs.readFileSync(`./dinosaurs.json`);
    let dinoData = JSON.parse(dinos);
    dinoData.push(req.body)
    fs.writeFileSync(`./dinosaurs.json`, JSON.stringify(dinoData))
    res.redirect(`dinosaurs/`)
})

router.get(`/new`, function(req, res) {
    res.render(`dinosaurs/new`)
})

// show edit form

router.get(`/edit/:id`, function(req, res) {
    let index = parseInt(req.params.id);
    let dinos = fs.readFileSync(`./dinosaurs.json`);
    let dinoData = JSON.parse(dinos)

    res.render(`dinosaurs/edit`, {dino: dinoData[index], dinoIndex: index}) // object needs dino: {name:string, type:string}, dinoIndex:int
})

// edit one dino
router.put(`/:id`, function(req, res) {
    let index = parseInt(req.params.id)
    let dinos = fs.readFileSync(`./dinosaurs.json`);
    let dinoData = JSON.parse(dinos);
    dinoData[index] = req.body;
    fs.writeFileSync(`./dinosaurs.json`, JSON.stringify(dinoData));
    res.redirect(`/dinosaurs/${index}`)

}) 

// delete dino
router.delete(`/:id`, function(req, res) {
    let index = parseInt(req.params.id);
    let dinos = fs.readFileSync(`./dinosaurs.json`);
    let dinoData = JSON.parse(dinos)

    dinoData.splice(index, 1);
    fs.writeFileSync(`./dinosaurs.json`, JSON.stringify(dinoData));
    
    res.redirect(`/dinosaurs`)
})

// do editing
router.get(`/:id`, function(req, res) {
    let index = parseInt(req.params.id);
    let dinos = fs.readFileSync(`./dinosaurs.json`);
    let dinoData = JSON.parse(dinos);
    res.render(`dinosaurs/show`, {dino: dinoData[index], dinoIndex: index})
});

module.exports = router;
