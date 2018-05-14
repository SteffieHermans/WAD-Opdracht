//require de express en body-parser package
const express = require("express");
const bodyParser = require("body-parser");
const {dburl} = require("./config/index.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(dburl)
    .then(() => console.log("Connected met DB"))
    .catch(err => {
        console.log("Ola, error", err);
        process.exit();
    });


//initialiseer de express app
const app = express();

//configureer de bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

//voorzie een standaard route ("/")
app.get("/", (req, res) => {
    res.json({ message: "Welkom op onze server" });
});

require("./app/routes/recipe.routes.js")(app);

//laat ten slotte met _luisteren_ op poort 4000
app.listen(4000, () => {
    console.log("Ik ben aan het luisteren op poort 4000.");
});