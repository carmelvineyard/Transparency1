const router = require("express").Router();
const opensecretsRoutes = require("./opensecrets");


router.use("/opensecrets", opensecretsRoutes);

module.exports = router;