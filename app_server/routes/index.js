var express = require("express");
var router = express.Router();
// pulling in my main controller so the route can hand requests off to it..
const ctrlMain = require("../controllers/main");

/* GET home page. */
// instead of rendering the page right here the route just passes it to the controller
router.get("/", ctrlMain.index);

module.exports = router;
