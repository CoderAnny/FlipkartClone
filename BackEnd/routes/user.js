
const express = require("express");

const router = express.Router();

router.post("/",require("../controllers/user").createUser);

router.get("/",require("../controllers/user").getAllUser);

router.get("/:userID",require("../controllers/user").getUser);

router.put("/:userID",require("../controllers/user").updateUser);

router.delete("/:userID",require("../controllers/user").deleteUser);

module.exports = router;