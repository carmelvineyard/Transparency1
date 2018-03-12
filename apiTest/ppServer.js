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

var membID = "W000817";

// Initialize Express
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Main route (20 bills most recently introduced by a single member. Also a simple Hello World Message)
app.get("/sponBills", function sponBills(req, res) {
  var sponURL = ("https://api.propublica.org/congress/v1/members/" + membID + "/bills/introduced.json");
  axios
    .get("sponURL", {
      headers: { "X-API-Key": "4N6ilo6LCdb7Gjmfg050VPVRB3tz10mpR5oAlNn2" }
    })
    .then(function(resp) {

      resp.data.results[0].bills.forEach(function(law) {

        console.log(law.number);
        console.log(law.congressdotgov_url);
        console.log(law.short_title);
        console.log(law.summary_short);

      })

    })
    .catch(function(err) {
      console.log(err);
    });
  console.log(req.body);
  res.send("Hello world");
});

// Cosponsored route (20 bills most recently co-sponsored by a single member. Also a Marauder's Map message)
app.get("/cosponsored", function(req, res) {
  axios
    .get("https://api.propublica.org/congress/v1/members/W000817/bills/cosponsored.json", {
      headers: { "X-API-Key": "4N6ilo6LCdb7Gjmfg050VPVRB3tz10mpR5oAlNn2" }
    })
    .then(function(resp) {
      resp.data.results[0].bills.forEach(function(law) {

        console.log(law.number);
        console.log(law.congressdotgov_url);
        console.log(law.short_title);
        console.log(law.summary_short);

      })

    })
    .catch(function(err) {
      console.log(err);
    });
  console.log(req.body);
  res.send("I solemnly swear I am up to no good");
});

// Votes route ((20?) most recent vote positions for a specific member. Also a Princess Bride message.)
app.get("/votes", function(req, res) {
  axios
    .get("https://api.propublica.org/congress/v1/members/W000817/votes.json", {
      headers: { "X-API-Key": "4N6ilo6LCdb7Gjmfg050VPVRB3tz10mpR5oAlNn2" }
    })
    .then(function(resp) {

      resp.data.results[0].votes.forEach(function(ballot) {

        console.log("Bill number: " + ballot.bill.number);
        console.log("Bill title: " + ballot.bill.title);
        console.log("Bill description: " + ballot.description);
        console.log("Vote date: " + ballot.date);
        console.log("Member's position: " + ballot.position);
        console.log("Vote result: " + ballot.result);

      })

    })
    .catch(function(err) {
      console.log(err);
    });
  console.log(req.body);
  res.send("Inconceivable!");
});

// senators route (Gets all the senators and their main info. Also a Geico message.)
app.get("/senators", function(req, res) {
  axios
    .get("https://api.propublica.org/congress/v1/115/senate/members.json", {
      headers: { "X-API-Key": "4N6ilo6LCdb7Gjmfg050VPVRB3tz10mpR5oAlNn2" }
    })
    .then(function(resp) {
      let senateNum = [];
      let stateRep = [];
      resp.data.results[0].members.forEach(function(person) {

        let perOb = new Object(); 
        perOb.first_name = person.first_name;
        perOb.last_name = person.last_name;
        perOb.state = person.state;
        perOb.pp_id = person.id;
        perOb.crp_id = person.crp_id;

        senateNum.push(perOb);
      })
/*
      for (let i = 0; i < senateNum.length; i++) {
        if (senateNum[i].state === "MA") {
          //console.log(senateNum[i]);
          stateRep.push(senateNum[i]);
        }
    
      }
*/
      console.log(senateNum);

    })
    .catch(function(err) {
      console.log(err);
    });
  console.log(req.body);
  res.send("Save 15% or more on insurance from Geico.");
});



// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
