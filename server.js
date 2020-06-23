// copy and paste from starwars lines 1-13 and port function at the end

// Dependencies - 
// =============================================================
// bringing into the express package into the file to create the server to listen to the https requests (lanuage)
const express = require("express");
// used to find a file
const path = require("path");

const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3020;

// Sets up the Express app to handle data parsing

// All middleware - connector between front end and the backend
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))


// html routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


// write to the db file when i click save - similar to local storage

// API calls
// need sinario for save button
// need retreiving

// posting api function (similar to the on.click function) - this is the save button click
// sending post "approval" to server
app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    // how we receive the post request
    const newNote = req.body;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(JSON.parse(data));
      
      // read file = fake database, use fs package to read files

      const jsonData = JSON.parse(data);
      jsonData.push(newNote);
      console.log(jsonData)

      fs.writeFile('./db/db.json', JSON.stringify(jsonData), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });


    });

  });

app.get("/api/notes", function(req, res) {
  console.log("test");
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));

    const jsonData = JSON.parse(data);

  return res.json(jsonData);
  })
});

app.delete("/api/notes/:id", function(req, res) {
  const ID = req.params.id
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    // delete entry that has an ID from the array
    // then save it back -- take out "plate" and the put back the rack (similar to write file)
    // for loop through the array and then delete the whole object

    

  })
});
    
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
  
    // Note.push(newNote);
  
    // res.json(newNote);





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


// optional if you want to go with separate folder style
// const apiRoutes = require("./routes/api-routes")
// const htmlRoutes = require("./routes/html-routes")

// const router = require("express").Router();
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// module.exports = router;



// goal: route ups, and server running
// can copy and paste and framework - need to figure out the meat
// testing out the route - start with html, then you can see it on the browser (easier) - serving static files

// run the server node server.js - from the terminal at the top level of the repo
// go to the live host address - one first page with note take -- if icons in the upper right hand corer are small/not dynamic it's not right/ make sure it's not static
// localhost:

// make sure you can make a note, delete a note