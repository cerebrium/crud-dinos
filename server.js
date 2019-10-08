const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs')

app.use(ejsLayouts)


app.listen(3004, function() {
    console.log('server is running')
})