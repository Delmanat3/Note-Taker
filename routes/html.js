
const app = require('express').Router();
const path = require('path');


app.get('/notes', (req, res) => {
    console.info(`${req.method} Request to the ${req.path} received`)
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// if * goes to the index bc readme but im not sure 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    console.info(`${req.method} request goin in ${req.path} received`)
    
});

module.exports=app