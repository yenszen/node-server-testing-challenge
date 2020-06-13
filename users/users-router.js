const router = require("express").Router();
const Users = require("./users-model");

router.get("/", async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "database error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await Users.add(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Please include username of user" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const count = await Users.remove(id);
    res.status(200).json({ count });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Invalid user ID" });
  }
});

module.exports = router;
