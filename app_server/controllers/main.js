// this is the main controller this handles the home page and it just tells express to render index.hbs and passes in the title as data
/* GET Homepage */
const index = (req, res) => {
  res.render("index", { title: "Travlr Getaways" });
};

module.exports = {
  index,
};
