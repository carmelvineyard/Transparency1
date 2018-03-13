const router = require("express").Router();
const opensecretsRoutes = require("./opensecrets");
const propublicaRoutes = require("./propublica");


router.use("/opensecrets", opensecretsRoutes);
router.use("/propublica", propublicaRoutes);

module.exports = router;