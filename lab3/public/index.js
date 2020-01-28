const Express = require("express");
const App = Express();
const port = 80;

App.get("/", function(Request, Response){
    Response.send("Hello World!");
    console.log("Got a request!");
});

App.use(express.static('public'));

var server = App.listen(8000, () => console.log("Listening on port 8000. Serves files from the public directory per lab instructions."));