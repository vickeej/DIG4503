const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.static("public"));
    console.log("Serves files from the public directory per lab instructions.");

App.get("/", function(Request, Response){
    Response.send("Hello World!");
    console.log("Hello World!");
});

App.listen(port, function() {
    console.log("Server running!");
  });