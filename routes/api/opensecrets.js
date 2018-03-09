const router = require("express").Router();
const articleController = require("../../controllers/opensecretsController");


router
  .route("/senators")
  .get(articleController.findSenators);

module.exports = router;
