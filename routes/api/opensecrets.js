const router = require("express").Router();
const articleController = require("../../controllers/opensecretsController");


router
  .route("/senetors")
  .get(articleController.findSenetors);

module.exports = router;
