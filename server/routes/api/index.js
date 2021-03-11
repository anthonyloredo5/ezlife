const path =require('path');
const express =require('express');
const router = express.Router();
const userRoutes =require('./users.js');
const apiRoutes = require("./todoAPI.js");

//User Routes
router.use("/users", userRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  console.log("yep this is the thing")
});


// API Routes
router.use("/todo", apiRoutes);


module.exports = router;