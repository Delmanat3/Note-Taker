
const db = require("../db/db");
const fs = require("fs");
const path = require("path");
const app = require("express").Router();

const rando=require('../Цікавий')

app.GET('/notes', (req,res)=>{
    console.log(`${req.method} request received so calm your pretty little ass down `)
    console.log('//////be patient you lazy fuck////////')
    res.status(200).json(db);

}
)

module.exports = router;