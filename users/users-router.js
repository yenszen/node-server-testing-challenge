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

module.exports = router;
