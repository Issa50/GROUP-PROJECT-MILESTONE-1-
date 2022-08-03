let Home = function (request, response) {
  response.render("home.ejs", {
    message: "Hello, world",
    arrayOfnumbers: [2, 5, 6, 8, 9],
  }); // It is like creating a variable called message that contains the words 'Hello, world'
};
exports.Home = Home;
let Contact = function (request, response) {
  response.render("contact.ejs");
};
exports.Contact = Contact;
