const axios = require("axios");
const opsKey = "69506b43429a530aad8ad9db12c5d43e";
// const stateInput = dropdown component
const stateBase = "http://www.opensecrets.org/api/?method=getLegislators&output=json&apikey=" + opsKey + "&id=";


module.exports = {
    findAll: function(req, res) {
      
      const query = req.query;
      console.log("test", query);
      axios
        .get(stateBase + query.stateAbr)
        .then(response => {
            res.json(response.data.response.legislator)
            console.log(response);
        });
    }
  };

  