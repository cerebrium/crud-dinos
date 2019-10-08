// requiring
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');
app.set('view engine', 'ejs');
app.use(express.static('static'))
app.use(ejsLayouts)



app.get(`/`, function(req, res) {
    res.send('root route')
})

app.use(`/dinosaurs`, require(`./routes/dinosaurs`))

app.listen(3005, function() {
    console.log('server is running')
})