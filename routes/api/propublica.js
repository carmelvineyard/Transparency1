const router = require("express").Router();
const articleController = require("../../controllers/propublicaController");


router
  .route("/senators")
  .get(articleController.sponBills)
  .get(articleController.coSponBills);

module.exports = router;