// pulling in nodes built in file system module so I can read the json file
var fs = require("fs");

// reading trips.json and then turning it into a javascript array of trip objects the path is relative to where I run npm start which is the travlr folder...
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

/* GET travel view */
// here the controller now passes the trips array to the view along with the title
const travel = (req, res) => {
  res.render("travel", { title: "Travlr Getaways", trips });
};

module.exports = {
  travel,
};
