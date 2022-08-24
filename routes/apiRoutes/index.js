const router = require("express").Router();
const earthquakeRoutes = require("../apiRoutes/earthquakeRoutes");

router.use(earthquakeRoutes);

module.exports = router;
