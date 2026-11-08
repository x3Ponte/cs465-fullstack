// travel controller this handles the /travel page and it renders travel.hbs and sends the title over so the template can use it.
/* GET travel view */
const travel = (req, res) => {
  res.render("travel", { title: "Travlr Getaways" });
};

module.exports = {
  travel,
};
