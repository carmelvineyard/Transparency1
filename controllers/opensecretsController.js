const axios = require("axios");
const opsKey = "69506b43429a530aad8ad9db12c5d43e";
const stateBase = "http://www.opensecrets.org/api/?method=getLegislators&output=json&apikey=" + opsKey + "&id=";

module.exports = {
    findAll: function(req, res) {
      const query = req.params.query;
      const params = Object.assign(
        { api_key: "69506b43429a530aad8ad9db12c5d43e" },
        req.query
      );
      axios
        .get(stateBase + query)
        .then(response => {
            console.log(response);
        //   db.Article
        //     .find()
        //     .then(dbArticles =>
        //       response.data.response.docs.filter(article =>
        //         dbArticles.every(
        //           dbArticle => dbArticle._id.toString() !== article._id
        //         )
        //       )
        //     )
        //     .then(articles => res.json(articles))
        //     .catch(err => res.status(422).json(err));
        });
    }
  };