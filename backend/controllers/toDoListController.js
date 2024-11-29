const toDoList = require("../models/toDoListModel");

module.exports.create = async (req, res, next) => {
  try {
    const { userName, description, agreeCount, commentCount, datetime } =
      req.body;

    // Create a new toDoList item
    const newToDoListItem = new toDoList({
      userName,
      description,
      agreeCount,
      commentCount,
      datetime,
    });

    // Save the new item to the database
    const savedUser = await newToDoListItem.save();

    return res.json({ msg: "Creation Success!", data: savedUser });
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};
module.exports.fingerAdd = async (req, res, next) => {
  try {
    const newData = await toDoList.findByIdAndUpdate(
      req.query.id,
      {
        $inc: { agreeCount: 1 },
      },
      { new: true }
    );
    console.log(newData);

    if (!newData) {
      return res.status(404).send({ msg: "ToDo item not found." });
    }

    return res.send(newData); // Send the updated document
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};
module.exports.addComment = async (req, res, next) => {
  try {
    console.log("arrived!");

    const { id, commentContent, sender } = req.body;

    // Log the request body for debugging
    console.log("Request Body:", req.body);

    // Check if commentContent and sender are provided
    if (!commentContent || !sender) {
      return res.status(400).send("Comment content and sender are required!");
    }

    // Find the toDoList by ID
    const toDoListItem = await toDoList.findById(id);

    // Check if the toDoListItem exists
    if (!toDoListItem) {
      return res.status(404).send("ToDoList not found!");
    }

    // Create a new comment object
    const newComment = {
      comment: commentContent, // Directly assign the content
      sender: sender, // Directly assign the sender
    };

    // Push the new comment to the commentList
    toDoListItem.commentList.push(newComment);

    // Save the updated toDoList item
    await toDoListItem.save();

    return res.send("Creation Success!");
  } catch (error) {
    next(error);
    console.log("Error occurred:", error); // Log the error for debugging
  }
};
