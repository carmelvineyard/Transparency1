const router = require("express").Router();
const articleController = require("../../controllers/opensecretsController");


router
  .route("/")
  .get(articleController.findAll);

module.exports = router;
