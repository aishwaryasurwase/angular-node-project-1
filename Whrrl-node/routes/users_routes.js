const express = require("express");
var router = express.Router();
const UsersCtrl = require("../controllers/users_controllers");

router.get("/getUser/:emailID", UsersCtrl.getUser);
router.post("/saveUser", UsersCtrl.saveUser);
// router.post('/uploadFile', UsersCtrl.uploadFile);

module.exports = router;
