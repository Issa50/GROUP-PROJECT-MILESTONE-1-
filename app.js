let express = require("express");
let { Home, Contact, Process } = require("./functions");
let webServer = express();


webServer.set("view engine", "ejs");
webServer.use(express.static("public"));



webServer.get("/", Home);
webServer.get("/contact", Contact);

webServer.use((request, response) => {
  response.send("<h1 style='text-align:center'>404: Page not found</h1>");
});


const port = 3000;
const host = "localhost";

webServer.listen(port, host, () => {
  console.log(`The server is running on http://${host}:${port}`);

});









