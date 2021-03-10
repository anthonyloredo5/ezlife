const router = require("express").Router();
const todoController = require("../controllers/todoController"); 

// Matches with "/api/books"
router.route("/todos")
  .get(todoController.findAll)
  .post(todoController.create);

// Matches with "/api/books/:id"
router
  .route("/todos/:id")
  .delete(todoController.remove);

module.exports = router;
