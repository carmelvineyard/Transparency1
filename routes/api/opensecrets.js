const router = require("express").Router();
const opensecretsController = require("../../controllers/opensecretsController");


router
  .route("/")
  .get(opensecretsController.findSenators);

router
  .route("/industries")
  .get(opensecretsController.findTopIndustries);

router
  .route("/individuals")
  .get(opensecretsController.findTopContributors);

module.exports = router;
