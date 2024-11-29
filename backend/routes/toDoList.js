const {
  create,
  addComment,
  fingerAdd,
} = require("../controllers/toDoListController");

const router = require("express").Router();

router.post("/create", create);
router.post("/addComment/", addComment);
router.post("/fingerAdd/", fingerAdd);

module.exports = router;
