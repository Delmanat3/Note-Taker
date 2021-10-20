
const db = require("../db/db");
const fs = require("fs");
const path = require("path");
const app = require("express").Router();

const rando = require('../idgen')

/*
    .delete?
 app.splice?("/notes/:id",(req,res)=>{
     let fileyBoy=path.join(_dirname, '../db/db.json')
     for (var i; i = 0; i < db.length; i++) {
//     if (db[i].id == req.params.id) {
//       db.splice(i, 1);
      } else{
          console.log("guess ill die")
 })

 stringify the response of the splice then write to db.json?
 res.json(db)
 */

  
app.delete("/notes/:id", (req, res) => {
    let fileyBoy = path.join(__dirname, "../db/db.json");
    for (i = 0; i < db.length; i++) {
      if (db[i].id == req.params.id) {
        db.splice(i, 1);
    }
    }
    
    fs.writeFile(fileyBoy, JSON.stringify(db), (err) => {
        if(err){
            console.log('dang this was kinda simple')
        }else{
      res.json(db)
        }
    })
});





app.get('/notes', (req,res)=>{
    console.log(`${req.method} request received so calm your pretty little ass down\n//////showing you the fucking list you dirty bastard//////// `)
    res.status(200).json(db);
    
}
)


app.post('/notes',(req,res)=>{
    console.log('be warned \n your pathetic attempt has been noticed')
    //if(req.body && req.title){

   // }
    let fileyBoy = path.join(__dirname, "../db/db.json");

    
    let sirNote = req.body

    sirNote.id = rando()
    
    console.log(`Your note has it's own designation.... isn't that cute. here it is:${sirNote.id}`)

    //readAndAppend(sirNote, db);
    //res.json('fortune favored you this time boy.');
    //res.error('Error in adding tip');
    db.push(sirNote)

    
    fs.writeFile(fileyBoy, JSON.stringify(db), (err)=> {
        if(err){
           console.log(err)
        }else{
           console.log('fortune favored you this time boy.');
        } 
      });
    
      
     res.json(sirNote);
})



module.exports = app;

  
// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );
// const readAndAppend = (content , file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         const parsedData = JSON.parse(data);
//         parsedData.push(content);
//         writeToFile(file, parsedData);
//       }
//     });
//   };

// app.post('/api/reviews', (req, res) => {
//     // Log that a POST request was received
//     console.info(`${req.method} request received to add a review`);
  
//     // Prepare a response object to send back to the client
//     let response;
  
//     // Check if there is anything in the response body
//     if (req.body && req.body.product) {
//       response = {
//         status: 'success',
//         data: req.body,
//       };
//       res.status(201).json(response);
//     } else {
//       res.status(400).json('Request body must at least contain a product name');
//     }
  
//     // Log the response body to the console
//     console.log(req.body);
//   });