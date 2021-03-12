const path =require('path');
const express =require('express');
const router = express.Router();
const userRoutes =require('./users.js');

//User Routes
router.use("/users", userRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;