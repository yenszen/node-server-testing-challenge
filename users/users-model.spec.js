const db = require("../data/db-config");
const Users = require("./users-model");

describe("users-model.js", () => {
  describe("add()", () => {
    it("should add new user to the database", async () => {
      await Users.add({ username: "yen" });
      await Users.add({ username: "april" });

      const users = await db("users");
      expect(users).toHaveLength(2);
    });

    beforeEach(async () => {
      await db("users").truncate();
    });
  });

  describe("remove()", () => {
    it("should remove user with specified ID from the database", async () => {
      await Users.add({ username: "yen" });
      await Users.add({ username: "april" });

      await Users.remove(1);
      const users = await db("users");
      expect(users).toHaveLength(1);
    });

    beforeEach(async () => {
      await db("users").truncate();
    });
  });

  describe("getUsers()", () => {
    it("each user should have an ID", async () => {
      await Users.add({ username: "yen" });
      const users = await Users.getUsers();
      expect(users[0].id).toBe(1);
    });

    it("should output an array", async () => {
      await Users.add({ username: "yen" });
      const users = await Users.getUsers();
      expect(typeof users).toBe("object");
    });

    beforeEach(async () => {
      await db("users").truncate();
    });
  });
});
