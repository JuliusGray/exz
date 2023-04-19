const Router = require("express");
const router = new Router();
const ProdGroupCtrl = require("../components/ProductGroupsController");

router.post("/", ProdGroupCtrl.addProdGroup);

module.exports = router;
