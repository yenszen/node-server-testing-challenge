const db = require("../data/db-config");

function getUsers() {
  return db("users");
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return db("users")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = {
  getUsers,
  add,
  remove
};
