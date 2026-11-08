var express = require("express");
var router = express.Router();
// hooking this route up to the travel controller..
var controller = require("../controllers/travel");

/* GET travel page. */
// the / here is relative to /travel since app.js mounts this router there
router.get("/", controller.travel);

module.exports = router;
