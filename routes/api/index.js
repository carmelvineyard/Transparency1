const router = require("express").Router();
const opensecretsRoutes = require("./opensecrets");
const propublicaRoutes = require("./propublica");
const loginRoutes = require("./login")


router.use("/opensecrets", opensecretsRoutes);
router.use("/propublica", propublicaRoutes);
router.use("/login", loginRoutes);

module.exports = router;