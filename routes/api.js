
const db = require("../db/db");
const fs = require("fs");
const path = require("path");
const app = require("express").Router();

app.GET('/notes', (req,res)=>{
    console.log(`${req.method} request received so calm your pretty little ass down `)
    console.log('//////be patient you lazy fuck////////')
    return res.status(200).json(db);

}
)

module.exports = router;