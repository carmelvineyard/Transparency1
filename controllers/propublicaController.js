const axios = require("axios");
const ppKey = "4N6ilo6LCdb7Gjmfg050VPVRB3tz10mpR5oAlNn2";
const billsCosponsoredone = "https://api.propublica.org/congress/v1/members/";
const billsCosponsoredtwo = "/bills/cosponsored.json/";
const billsByMemberone = "https://api.propublica.org/congress/v1/members/";
const billsByMembertwo = "/bills/introduced.json";




module.exports = {
    findBillsCo: function(req, res) {
      
      const query = req.query;
      console.log(query)
      axios
        .get(billsCosponsoredone + query.memID + billsCosponsoredtwo, {
            headers: {"X-API-KEY": ppKey}
        })
        .then(response => {
            res.json(response.data.results[0])
        });
    },
    findIntroducedBills: function(req, res) {

        const query = req.query;
        axios
            .get(billsByMemberone + query.memID + billsByMembertwo, {
                headers: {"X-API-KEY": ppKey}
            })
            .then(response => {
                res.json(response.data.results[0])
            })
    }
};

  