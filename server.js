// requiring
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');
const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.use(express.static('static'))
app.use(ejsLayouts);

// middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// global routes
app.get(`/`, function(req, res) {
    res.render(`home`)
})

app.use(`/cryptids`, require(`./routes/cryptids`))
app.use(`/dinosaurs`, require(`./routes/dinosaurs`))

app.listen(3005, function() {
    console.log('server is running')
})