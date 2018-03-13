const router = require("express").Router();
const propublicaController = require("../../controllers/propublicaController");


router
  .route("/billsCo")
  .get(propublicaController.findBillsCo);

router
  .route("/billsIntroduced")
  .get(propublicaController.findIntroducedBills);

module.exports = router;