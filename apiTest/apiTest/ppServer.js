/* THIS IS A SEPARATE FILE AND DOES NOT CONNECT TO apiTest.html, mapLightTest.js, or openSecrets.js!!!!!!

INSTRUCTIONS: RUN THIS IN THE TERMINAL VIA nodemon ppServer.js
    OPEN POSTMAN AND SET IT TO CALL FROM LOCALHOST://3000
    CLICK THE BLUE BUTTON TO THE RIGHT OF THE FIELD WHERE LOCALHOST IS WRITTEN.
    GO BACK TO YOUR TERMINAL AND SEE THE RESPONSE. CHEER AND FEEL THE MAGIC. ;)

    RIGHT NOW, THIS IS SET TO BRING BACK ALL PP'S INFO FOR ONE PARTICULAR LEGISLATOR.
    IN THEORY, WE WOULD MERELY CHANGE THE URL AND KEEP THE SAME HEADERS TO MAKE DIFFERENT CALLS.  */


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var axios = require("axios");
var Congress = require("propublica-congress-node");
var client = new Congress("4N6ilo6LCdb7Gjmfg050VPVRB3tz10mpR5oAlNn2");

// Initialize Express
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  axios
    .get("https://api.propublica.org/congress/v1/members/K000388.json", {
      headers: { "X-API-Key": "4N6ilo6LCdb7Gjmfg050VPVRB3tz10mpR5oAlNn2" }
    })
    .then(function(resp) {
      console.log(resp.data.results[0]);
    })
    .catch(function(err) {
      console.log(err);
    });
  console.log(req.body);
  res.send("Hello world");
});

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
