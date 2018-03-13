const axios = require("axios");
const opsKey = "69506b43429a530aad8ad9db12c5d43e";
const stateBase = "http://www.opensecrets.org/api/?method=getLegislators&output=json&apikey=" + opsKey + "&id=";
const indBase = "https://www.opensecrets.org/api/?method=candIndustry&output=json&apikey=" + opsKey + "&cid=";
const contriBase = "https://www.opensecrets.org/api/?method=candContrib&output=json&apikey=" + opsKey + "&cid=";

module.exports = {
    findSenators: function(req, res) {
      
      const query = req.query;
      axios
        .get(stateBase + query.stateAbr)
        .then(response => {
            res.json(response.data.response.legislator)
        });
    },
    findTopIndustries: function(req, res) {
      const query = req.query;
      axios
        .get(indBase + query.senator)
        .then(response => {
            res.json(response.data.response.industries)
        });
    },
    findTopContributors: function(req, res) {
      const query = req.query;
      axios
        .get(contriBase + query.senator)
        .then(response => {
            res.json(response.data.response.contributors)
        })
    }
  };

  